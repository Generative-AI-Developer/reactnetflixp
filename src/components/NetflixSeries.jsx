const NetflixSeries = ()=>{

    const name = "Quenn of Tears"
    const rating = "8.3"
    const summary = "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eaque voluptates mollitia quis quidem dicta sapiente sit aliquid consequatur id, fugit assumenda quaerat tenetur, repellat ipsum, deleniti quod eligendi enim."
  
    let age = 15;
  
    // // 2nd Method
    // let canWatch = "Not Availble"
    // if(age>=18) canWatch = "Watch Now"
  
    // 3rd Mothod
    const canWatch = ()=>{
      if(age>=18) return "Watch Now";
      return "Not Available"
  
    }
  const returnGenera = ()=>{
    const genera = "RomCom"
    return genera
  }
  
    return(
      <>
      <div>
      <img src="bg.png" alt="" width="30%" height="30%"/>
    </div>
    <h2>Name: {name}</h2>
    <h3>Rating: {rating}</h3>
    <p>Summary: {summary}</p>
    <p>Genera:{returnGenera()}</p>
    {/* 1st Method */}
  
    {/* <button>{age >= 18?"Watch Now": "Not Available"}</button> */} 
        {/* 2nd Method */}
    {/* <button>{canWatch}</button> */}
          {/* 3rd Method */}
            <button>{canWatch()}</button>
  
    </>
    )
  
  
  }


  export default NetflixSeries