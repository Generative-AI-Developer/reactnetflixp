    
    
    export const EventHandling = ()=>{


      function handleButtonClick(event){
        console.log(event)
        console.log(event.target)
        console.log(event.type)


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
