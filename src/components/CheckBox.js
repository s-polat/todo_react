import React from 'react'
import '../';
function CheckBox() {
    return (
        <div>
            <label className="my-checkbox">
            { /* <!-- can be clicked, because the whole label is clickable --> */}
            <input type="checkbox"/>
            <span className="fake-input"></span>
            <span>Mein Label</span>
            </label>
        </div>
    )
}

export default CheckBox
