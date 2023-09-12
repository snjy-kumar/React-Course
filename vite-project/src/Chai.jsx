import { useState } from "react";


function Chai(){
    let [count, setCount] = useState(0);

// let count = 0;
let addValue = () => {
    //console.log("clicked", count);
    if(count >= 10){
        alert("Sorry, Maximum Limit reached");
    } else{

        setCount(count + 1);
    }
    
}
let removeValue =() => {
    // console.log("clicked");

    if(count === 0){
        alert("Sorry, Zero limit reached");
    } else{
        setCount(count - 1);
    }
}
    return (
        <div>
            <h1>Chai is Ready</h1>
            <center>
            <p>{count}</p>
            <button onClick={addValue}>Add items</button>
            <button onClick={removeValue}>Remove items</button>
            </center>
        </div>
    )
}
export default Chai;