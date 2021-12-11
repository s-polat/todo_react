import React from "react";

function Completed({state, dispatch}) {
  return (
    <div style={{ minHeight: "35vh" }}>
      <div className="card-body">
        <h3>COMPLETED</h3>
        <hr />
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {state.map((todo, index) => {
               const onToggle=()=>{
                dispatch({type:'complate', payload:{index:index} })
              }
              const onDelete=()=>{
                dispatch({type:'delete', payload:{index:index} })
              }
            if (todo.completed) {
              return (
                <div
                  key={index}
                  class="card"
                  style={{ margin: "10px", width: "300px" }}
                >
                  <div class="card-body">
                    <h5 class="card-title">{index + 1}.TODO</h5>
                    <p class="card-text">{todo.msj}</p>
                    <button style={{width:'43%'}}  onClick={onToggle} class="btn btn-success mx-2 px-2 ">Completed✌</button>
                    <button style={{width:'43%'}} onClick={onDelete} class="btn btn-danger mx-2">Delete</button>
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

export default Completed;
