import React,{useState} from "react"
export default function TextForm(props) {   
   
    const handleUpClick= ()=>{
        //console.log("uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handlelowerClick= ()=>{
        //console.log("uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handleClear= ()=>{
        //console.log("uppercase was clicked" + text);
       // let newText= " ";
        setText(" ")
        
    }
    const handleCopy= ()=>{
        //console.log("uppercase was clicked" + text);
     navigator.clipboard.writeText(text);
     setText(text)
       
    }
    const handleOnChange= (event)=>{
        //console.log("on chnage was clicked");
        setText(event.target.value);
    }
        const [text, setText] = useState ("enter text here");

   // setText("new text here");
    return (
        <>
        <div className="container">
            <h1>{props.heading} </h1>
            <div className="mb-3">
  <textarea className="form-control"value={text} onChange={handleOnChange} id="myBox"my-3 rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>convert to upercase</button> 
<button className="btn btn-primary mx-3" onClick={handlelowerClick} >convert to lowercase</button>
<button className="btn btn-primary mx-3" onClick={handleClear} >clear textarea</button>
<button className="btn btn-primary mx-3" onClick={handleCopy} >copy text</button>
        </div>
        <div className="container">
            <h1>text summary</h1>
            <p> {text.length}words  {text.split(" ").length}length </p>
        </div>
        </>
    )
}