import React from 'react'
 import { useState } from 'react';
/*
// props = {text: String, onButton: Function}
const TodoInput = (props) => {
    const [name, setName] = useState('Wasche wäschen');

    const fertig = () => {
      props.onButton(name);
    };

    const changeHandler = (event) => {
      console.log(event.target.value);
      setName(event.target.value);
    };

    return (
    <div>
      <input
       value={name}
       type="text"
       placeholder="Name der Aufgaben"
       onChange={changeHandler}
       />

      <button onClick={fertig}>{props.text}</button>
      <p>"{name}" Hinzufügen?</p>
    </div>
    );
  };
  
  export default TodoInput; */

function Input(props) {
    const [name, setName] = useState('');
   
    const fertig = (e) => {
      e.preventDefault();
      props.dispatch({type:'add', payload:{name:name} });
      setName('')
    };
    //inputtan veriyi alan fonksiyon. Die Funktion,die die Werte von input bekommt
    //const input=document.querySelector("#todo").value
    const changeHandler = () => {
      const input=document.querySelector("#todo").value
      //console.log(event.target.value);
      setName(input);
    };
    return (
        <div style={{minHeight:"15vh"}}>

            <div className="card-body">
                <form onSubmit={fertig} id="todo-form" name="form">
                    <div className="form">
                        <div className="form-group">
                            <input className="form-control" style={{height:'4em'}}  name="todo" id="todo" placeholder="Enter a To Do" autocomplete="off"  type="text" 
                            value={name} onChange={changeHandler}/>

                            <button type="submit" className="btn btn-success" style={{width:'100%', marginTop:'10px', height:'4em'}} id="submit" >ADD TO DO</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Input
