import React, {useState, useEffect} from 'react';
import './App.css';
import ToDo from './components/ToDo.js'


function App() {

  

  var [toDoItem, setToDoItem] = useState("");
  var [item, setItem] = useState("");
  var [toDoList, setList] = useState([]);

  useEffect(()=>{
    console.log("Update")
  }, [toDoList]); 

  var deleteItem = (deleted) =>{
    
    /*var temp = toDoList;
    temp.pop(deleted);*/
    setList(()=>{
      console.log(deleted);
      var newList = [...toDoList];
      newList.splice(deleted, 1);
      return newList;
    });
  }

  var swapItems = (index, dir) => {
    if(index + dir >= 0 && index + dir < toDoList.length){
      setList(() => {
        var newList = [...toDoList];
        var a = newList[index];
        var b = newList[index + dir];
        newList[index] = b;
        newList[index + dir] = a;

        return newList;
      });
    }else{
      return null;
    }
}

  return (
    <div className="App">
      <div className="App-container">
      <div className="To-do-container">
        <div className="Add-to-do">
          <div className="input-container">
            <input id="list-input" autocomplete="off" name="list-input" type="text" onChange={e=>{
              setToDoItem(e.target.value);
            }}></input>
            <label htmlFor="list-input">New task</label>

            <div className="underline"></div>
          </div>
          <div>
            <h1 onClick={()=>{
              var temp = toDoList;
              if(toDoItem  != ""){
                setList([...toDoList, toDoItem]);
              }
              document.getElementById("list-input").value = ""; 
              setToDoItem("");
            }}>+</h1>
             
          </div>
          
        </div>
        <div className="To-do-list">
          {toDoList.map((td, index) => (
              <ToDo
              key = {index}
              index = {index}
              content = {td}
              ticked = {false}
              deleteFunc = {deleteItem}
              swap = {swapItems}
              />
          ))}
        </div>
       
      </div>
    </div>
  </div>
  );
}

export default App;
