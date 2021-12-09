import React from "react";
import { ListGroup } from "react-bootstrap";

function Todo(props) {
  return (
    <div style={{ minHeight: "40vh" }}>
      <div className="card-body">
        <h3>TO-DO</h3>
        <hr />
        <div className="d-flex flex-row flex-wrap justify-content-center">
          
            {props.state.map((todo, index) => {
              return (
                
                  <div key={index} class="card" style={{ margin: "10px", width:'300px' }}>
                    <div class="card-body">
                      <h5 class="card-title">{index+1}.TODO</h5>
                      <p class="card-text">{todo}</p>
                      <a href="#" class="btn btn-primary">
                        Completed
                      </a>
                    </div>
                  </div>
               
              );
            })}
         
        </div>
      </div>
    </div>
  );
}

export default Todo;
