import React from "react"; 


function Button ({name, des}){

    // console.log(props)  // {name: "Apple", des: "I am a red fruit"}

    //  props.name="Banana"  

    return(
        <div>
            <button> {name} </button>
            <p>{des}</p>
        </div>
    )
}


export default Button;



// function sumOf2(a,b){
     
// }

// sumOf2(10,20)
// sumOf2(30,40)

{/* <Button  />
<Button />
<Button /> */}