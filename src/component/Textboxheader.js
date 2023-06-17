import React, { useState } from 'react';

export default function Textboxheader(props) {

    const handelUpclick = () => {
        // console.log('up');
        let newText = text.toUpperCase();
        setText(newText)
    };
    const handellowclick = () => {
        // console.log('low');
        let newText = text.toLowerCase();
        setText(newText)
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    // const colorechange = (event) => {
    //     setText.style.color="red";
    // };

    const [text, setText] = useState("");

    return (
        <>
            <div className="mb-3">
                <label htmlFor="htmlFormGroupExampleInput" className="htmlForm-label">{props.label1}</label><br />
                <textarea 
                className="form-control" 
                placeholder='Enter anythings' 
                onChange={handleOnChange} 
                style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}}
                value={text} id="my-box" 
                rows={8}></textarea>
            </div>
            <button type="button" className="btn btn-outline-success" onClick={handelUpclick}>Upper</button>
            <button type="button" className="btn btn-outline-success" onClick={handellowclick}>Lower</button>
            {/* <button type="button" className="btn btn-outline-success" onClick={colorechange}>Lower</button> */}
            <button>togel</button>
        </>
    )
}
