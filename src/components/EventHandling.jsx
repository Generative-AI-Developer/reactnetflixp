    
    
    export const EventHandling = ()=>{
      function handleButtonClick(){
        alert("I am onclick Event")
      }

        return(
            <>
            <button onClick={handleButtonClick}>Click Me</button>
            <button onClick={()=>{handleButtonClick()}}>Click Me 2</button> 
            {/* When ever you are using FAT Arrow function the function should be called */}

            </>
        )
    }
