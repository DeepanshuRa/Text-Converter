import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpText = () => {
        console.log("button clikced");
        setText(text.toUpperCase())
        props.showAlert('Converted into Uppercase', "success")
    }
    const handleLowerText = () => {
        console.log("button clikced");
        setText(text.toLowerCase())
        props.showAlert('Converted into Lowercase', "success")
    }
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }
    const handleClear = () => {
        console.log("on change");
        setText('')
        props.showAlert('Clear All', "success")
    }
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="3"></textarea>
                </div>

                <button className="btn btn-danger" onClick={handleClear}>Clear All</button>
                <button className="btn btn-primary mx-2" onClick={handleUpText}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerText}>Convert to LowerCase</button>
            </div>
            <div className="container mt-3">
                <h1>Your text summary</h1>
                <p>{text.split(' ').length} words, {text.length} character</p>
                <p>{0.008 * text.split(' ').length} minutes to read</p>
                <h1>Preview</h1>
                <p>{text ? text : 'Enter text to preview'}</p>
            </div>
        </>
    )
}
