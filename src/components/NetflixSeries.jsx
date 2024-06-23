import seriesData from "../api/seriedData.json";
import { SeriesCard } from "./SeriesCard";
const NetflixSeries = () => {
  return (
    <ul className="grid grid-three-col">
      {seriesData.map((curElem) => {
        return <SeriesCard key={curElem.id} data={curElem} />;
      })}
    </ul>
  );
};
export default NetflixSeries;
