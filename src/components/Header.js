import React, {useState} from 'react'



function Header() {
    const [lamp, setLamp]=useState(false);
    const switchLamp=()=>{setLamp(!lamp)}
    return (
        <div style={{minHeight:"10vh"}}>

            <div className="card-header">
                <h1 onClick={switchLamp}>Your TO-DO App</h1>

                    {lamp ? <h3> AKTIV </h3>:null}

                </div>
        </div>
    )
}

export default Header
