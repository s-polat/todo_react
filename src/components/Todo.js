import React from 'react'

function Todo(props) {
    return (
        <div style={{minHeight:"40vh"}}>
            <div className="card-body">
                <h3>TO-DO</h3>
                <hr/>
                
                <div className="form-row">
                    {props.addTodo}
                </div>

               
            </div>
        </div>
    )
}

export default Todo
