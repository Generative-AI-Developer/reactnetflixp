

export const SeriesCard = ({data})=>{
    // console.log(data)
    const {id, img_url,name,rating,description,genre,cast,watch_url} = data

  const btn_style = {
    padding: "1.2rem 2.4rem",
    border:"none",
    fontSize: "1.6rem",
    backgroundColor: `${rating>= 8.5 ? "#2caa1b" : "#dbd13d"}`,
    color: "black",
    borderRadius: "14px",
    fontWeight: "bold",

    // const Button = style.button`
    // padding: "1.2rem 2.4rem";
    // border:"none";
    // fontSize: "1.6rem";
    // background-color: `${rating>= 8.5 ? "#2caa1b" : "#dbd13d"}`;
    // color: "black";
    // borderRadius: "14px";
    // fontWeight: "bold";

    // `



   
  }

  const ratingClass = rating >= 8.5? "supper-hit": "average"

    return(
        <li className="card">
        <div>
        <img className="image-fit" src={img_url} alt={name} width="40%" height="40%" />
        </div> 
        <div className="card-content">
        <h2>Name: {name}</h2>
        <h3>Rating: <span className={`rating ${ratingClass}`}> {rating}</span></h3>
        <p>Summary: {description}</p>
        <p>Genera:{genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          <button style={btn_style}>Watch Now</button>
        </a>
        </div>
      </li>)
}