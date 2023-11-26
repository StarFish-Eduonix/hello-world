import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

// JSX - JavaScript XML


function Hello(){

    let name = "Abhishek" 
 
    let h1Style = {textAlign: "center", border: "2px solid red"}
 
     return (
            <div className="hello">
               <h1 style={h1Style}>Hello {name} {2+3+5+9}</h1>
               <p>Hey this is my first React App</p>
            </div>
            )
 }

ReactDOM.render(<Hello/>, document.getElementById("root"));






// function hello(){
//     return "hello"
// }

// hello() 

{/* <Hello />
<Hello></Hello> */}