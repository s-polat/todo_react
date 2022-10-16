import React from "react";


function Todo({state, dispatch}) {
 
  return (
    <div style={{ minHeight: "40vh" }}>
      <div className="card-body">
        <h3>TO-DO</h3>
        <hr />
        <div className="d-flex flex-row flex-wrap justify-content-center">
          
            {
            state.map((todo, index) => {
              const onToggle=()=>{
                dispatch({type:'complate', payload:{index:index} })
              }

              const onDelete=()=>{
                dispatch({type:'delete', payload:{index:index} })
              }
              if(todo.completed===false){
                return (
                
                  <div key={index} className="card" style={{ margin: "10px", width:'300px' }}>
                    <div className="card-body">
                      <h5 className="card-title">{index+1}.TODO</h5>
                      <p className="card-text">{todo.msj}</p>
                      <button style={{width:'44%'}}  onClick={onToggle} className="btn btn-success mx-2">
                        Completed✌
                      </button>
                      <button style={{width:'42%'}}  onClick={onDelete} className="btn btn-danger mx-2">Delete</button>
                    </div>
                  </div>
               
              );
              }else {
                return null
              }
              
            })}
         
        </div>
      </div>
    </div>
  );
}

export default Todo;
