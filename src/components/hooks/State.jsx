import { useState } from "react";

export const State = ()=>{
const [count, setCount]= useState(0);

const handleClickButton = ()=>{
    setCount (()=> count +1)
}
    
return(
    <>
    
<h1>{count}</h1>
<button onClick={handleClickButton}>Increment</button>

</>
)
}

