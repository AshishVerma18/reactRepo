import React, { useState } from 'react';
import ListComp from './ListComp'
const ToDoList=()=>{
    const[item,setItem]=useState([]);
    const[newItem,setNewItem]=useState([]);
    const itemHandler=(e)=>{
        setItem(e.target.value);
    }
    const addItem=()=>{
        setNewItem((oldItem)=>{
            return[...oldItem,item];
        });
        setItem("");

    }
    const deleteItem=(id)=>{
        setNewItem((oldItem)=>{
            return oldItem.filter((arrVal,index)=>{
                return index!==id;

        });
        });
    }
    return(
        <>
        <div className="main-div">
            <div className="center-div">
                <h1>ToDo List</h1>
                <input type="text" placeholder="Add a new Item" onChange={itemHandler}value={item}/>
                <button onClick={addItem}> + </button>

                <ol>
                    
                    {newItem.map((adedItem,index)=>{
                        return( 
                        <ListComp
                         list={adedItem}
                         key={index}
                         id={index}
                         onSelect={deleteItem}
                         /> 
                      );  })}
                   
                </ol>
            </div>
        </div>
        </>
    );
}
export default ToDoList;
