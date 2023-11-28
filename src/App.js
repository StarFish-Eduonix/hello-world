import React from "react"
import "./style.css"
import Button from "./Components/Button"

function App(){
 
     return (
            <div className="hello">
               <h1>Abhishek Shankar Choudhary</h1>
               <p>I am software Developer</p>
               {/* <button>Mango</button>
               <button>Orange</button>
               <button>Apple</button> */}

                <Button name="Apple" des="I am a red fruit"/>
                <Button name="Mango" des="I am yellow in color"/>
                <Button name="Orange" des="I am ornage in Color"/>
            </div>
            )
 }


 export default App
