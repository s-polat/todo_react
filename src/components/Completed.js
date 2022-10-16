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
                  className="card"
                  style={{ margin: "10px", width: "300px" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{index + 1}.TODO</h5>
                    <p className="card-text">{todo.msj}</p>
                    <button style={{width:'43%'}}  onClick={onToggle} className="btn btn-primary mx-2 px-2 ">Incomplete</button>
                    <button style={{width:'43%'}} onClick={onDelete} className="btn btn-danger mx-2">Delete</button>
                  </div>
                </div>
              );
            }
            else 
            {return null}

          })}
        </div>
      </div>
    </div>
  );
}

export default Completed;
