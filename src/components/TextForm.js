import React, { useState } from "react";
export default function TextForm(props) {
const handleUpClick = () => {
let newText = text.toUpperCase();
setText(newText);
props.showAlert("Converted to Upper Case", "success")
};
const convertSentence = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText (newText)
};

//remove all the symbols
const handletextExtract =()=>{
    const regex = /[0-9/A-Z/a-z/ /]/g;
    const letters = text.match(regex);
    const res1 = letters.join('');
    setText(res1);
    };

//to extract only the numbers in the text:
const handleNumExtract =()=>{
    let regex = /[0-9/ /]/g;
    let digits = text.replace(/^ +/, ""); // or text.replace(/^[ ]+/, "");
    console.log(digits);
    digits = digits.match(regex);
    console.log(digits);
    let res = digits.join('');
    res = res.replace(/\s\s+/g, " ")
    setText(res);
};

const handleLowClick = () => {
let newText = text.toLowerCase();
setText(newText);
props.showAlert("Converted to lower Case", "success")
};
const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    // or
    // let text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
}

const handleOnChange = (event) => {
setText(event.target.value);
console.log("On Change");
};
const [text, setText] = useState("");
return (
<>
    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="my-3">
            <textarea style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"black"}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={convertSentence}>
            Convert to Sentence
        </button>
        <button className="btn btn-primary" onClick={handleLowClick}>
            Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handletextExtract}>
            Remove Symbols
        </button>
        <button className="btn btn-primary mx-2" onClick={handleNumExtract}>
            Extract Numbers
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
            Copy Text
        </button>
    </div>
    <div className="container my-4" style={{color: props.mode==="dark"?"white":"black"}}>
        <h2>You text summary</h2>
        <p>{text.split(" ").length - 1} words, {text.length} characters</p>
        <p>Time to read - {text.split(" ").length * 0.008}</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
</>
);
}