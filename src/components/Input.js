import React from 'react'
 import { useState } from 'react';


function Input(props) {
    const [name, setName] = useState({});
   
    const submitHandler = (e) => {
      e.preventDefault();
      props.dispatch({type:'add', payload:{name:name} });
      setName({msj:''})
    };
    //inputtan veriyi alan fonksiyon. Die Funktion,die die Werte von input bekommt
    //const input=document.querySelector("#todo").value
   
    const changeHandler = (event) => {
      const input=event.target.value
      //console.log(event.target.value);

      setName({msj:input, completed:false});
    };
    return (
        <div style={{minHeight:"15vh"}}>

            <div className="card-body">
                <form onSubmit={submitHandler} id="todo-form" name="form">
                    <div className="form">
                        <div className="form-group">
                            <input className="form-control" style={{height:'4em'}}  name="todo" id="todo" placeholder="Enter a To Do" autocomplete="off"  type="text" 
                            value={name.msj} onChange={changeHandler}/>

                            <button type="submit" className="btn btn-success" style={{width:'100%', marginTop:'10px', height:'4em'}} id="submit" >ADD TO DO</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Input
