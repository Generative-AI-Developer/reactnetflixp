    
    
    export const EventHandling = ()=>{


      function handleButtonClick(event){
        console.log(event)
        // console.log(event.target)
        // console.log(event.type)


        alert("I am onclick Event")
      }

      const handleWellComeUser=(user)=>{
        console.log(` hy ${user} wellcome`)
      }

        return(
            <>
           {/* Function component with named Funtion */}
            <button onClick={handleButtonClick}>Click Me</button>
            <br />
            <button onClick={()=>handleButtonClick(event)}>Click Me 2</button> 
            {/* When ever you are using FAT Arrow function the function should be called */}
            <button onClick={()=>handleWellComeUser("Asif")}>ClickUserBotton</button>
            </>
        )
    }
