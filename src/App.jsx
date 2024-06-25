import NetflixSeries from "./components/NetflixSeries"
import "./components/Netflix.css"
import { EventHandling } from "./components/EventHandling"

const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">List of Best Netflix Series</h1>
      {/* <NetflixSeries /> */}
      <EventHandling/>
     
    </section>
  )
}
export default App

