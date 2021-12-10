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
              const onComplate=()=>{
                dispatch({type:'complate', payload:{index:index} })
              }

              const onDelete=()=>{
                dispatch({type:'delete', payload:{index:index} })
              }
              if(todo.completed===false){
                return (
                
                  <div key={index} class="card" style={{ margin: "10px", width:'300px' }}>
                    <div class="card-body">
                      <h5 class="card-title">{index+1}.TODO</h5>
                      <p class="card-text">{todo.msj}</p>
                      <button onClick={onComplate} class="btn btn-primary">
                        Incomplete
                      </button>
                      <button onClick={onDelete} class="btn btn-danger mx-4">Delete</button>
                    </div>
                  </div>
               
              );
              }
              
            })}
         
        </div>
      </div>
    </div>
  );
}

export default Todo;
