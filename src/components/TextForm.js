import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert(" msg transformed to uppercase","Success")
    }
    const clearText = ()=>{
        let newText = ("")
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("On Change")
        setText(event.target.value)
    }
    const handleCopy = ()=>{
        console.log("i am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
const [text, setText] = useState("");

  return (
    <>
<div className='container' style={{color: props.mode==='dark'?'white':'#042743'}} >
    <h1 className='my-2'>{props.textArea}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="5"></textarea>
<button className="btn btn-primary mb-3 mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mb-3 mx-2 my-2" onClick={clearText} >Clear All</button>
<button className="btn btn-primary mb-3 mx-2 my-2" onClick={handleCopy} >Copy Text</button>
<button className="btn btn-primary mb-3 mx-2 my-2" onClick={handleExtraSpaces} >Remove Extraspace</button>
</div>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} time taken by you read the word</p>
    </div>
    </>
  )
}
