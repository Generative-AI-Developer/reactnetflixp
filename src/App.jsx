
const App = () => {
  return (
    <div>
     <NetflexSeries/>
     <NetflexSeries/>
     <NetflexSeries/>
     <NetflexSeries/>

    </div>
  )
}

const NetflexSeries = ()=>{

  const name = "Quenn of Tears"
  const rating = "8.3"
  const summary = "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eaque voluptates mollitia quis quidem dicta sapiente sit aliquid consequatur id, fugit assumenda quaerat tenetur, repellat ipsum, deleniti quod eligendi enim."

const returnGenera = ()=>{
  const genera = "RomCom"
  return genera
}

  return(
    <>
    <div className="side">
    <img src="bg.png" alt="" width="30%" height="30%"/>
  </div>
  <h2>Name: {name}</h2>
  <h3>Rating: {rating}</h3>
  <p>Summary: {summary}</p>
  <p>Genera:{returnGenera()}</p>
  </>
  )


}

export default App
