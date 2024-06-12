import seriesData from "../api/seriedData.json";

const NetflixSeries = () => {
  return (
    <ul>
      {
        seriesData.map((curElem)=>{
          return(
          <li key = {curElem.id}>
          <div>
          </div>
            <img src={curElem.img_url} alt="" width="30%" height="30%" />
          <h2>Name: {curElem.name}</h2>
          <h3>Rating: {curElem.rating}</h3>
          <p>Summary: {curElem.description}</p>
          <p>Genera:{curElem.genre}</p>
          <p>Cast: {curElem.cast}</p>
          <a href={curElem.watch_url} target="_blank">
            <button>Watch Now</button>
          </a>
        </li>)
        })
      }
      
    </ul>
  );
};
export default NetflixSeries;
