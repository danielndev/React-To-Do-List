import React from 'react';
import check from '../resources/check.png';
import App from '../App.js';

var ToDo = ({index,ticked, content, deleteFunc, swap}) =>{
    var checkboxId = "checkbox"+index;
    return(
        <div className="To-do-item">
            <div className="To-do-checkbox">
                <div id={checkboxId} className="box" onClick={()=>{
                    var box = document.getElementById(checkboxId);
                    if(ticked === true){
                        ticked = false;
                        box.style.color = "rgba(0,0,0,0)";                        
                    }else{ 
                        ticked = true;
                        box.style.color = "#009533"; 
                    }
                }}>
                    <h2>✓</h2>
                </div>
            </div>  
            <div className="To-do-p">
                <p>{content}</p>
            </div> 
            
            <div className="arrows" >
                
                <div className="arrow up" onClick={()=>{swap(index, -1);}}>
                    ∆           
                </div>
                <div className="arrow down" onClick={()=>{swap(index, 1);}}>
                    ∇         
                </div>
            </div>
            <div className="delete-button" onClick={()=>{
                deleteFunc(index);
            }}></div>
        </div>
    
  
    );
}

export default ToDo;