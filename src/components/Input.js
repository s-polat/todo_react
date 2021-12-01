import React from 'react'


function Input() {
    return (
        <div style={{minHeight:"15vh"}}>

            <div className="card-body">
                <form id="todo-form" name="form">
                    <div className="form">
                        <div className="form-group">
                            <input className="form-control" style={{height:'4em'}}  type="text" name="todo" id="todo" placeholder="Enter a To Do" autocomplete="off"/>

                            <button type="submit" className="btn btn-success" style={{width:'100%', marginTop:'10px', height:'4em'}} id="submit">ADD TO DO</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Input
