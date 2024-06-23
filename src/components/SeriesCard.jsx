import { border } from "@chakra-ui/react"


export const SeriesCard = ({data})=>{
    // console.log(data)
    const {id, img_url,name,rating,description,genre,cast,watch_url} = data

  const btn_style = {
    padding: "1.2rem 2.4rem",
    border:"none",
    fontSize: "1.6rem",
    backgroundColor: "blue",
    color: "white"
  }

    return(
        <li className="card">
        <div>
        <img className="image-fit" src={img_url} alt={name} width="40%" height="40%" />
        </div> 
        <div className="card-content">
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p>Summary: {description}</p>
        <p>Genera:{genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          <button style={btn_style}>Watch Now</button>
        </a>
        </div>
      </li>)
}