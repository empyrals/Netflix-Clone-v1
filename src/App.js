// import { useState } from "react";
import "./App.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
import requests from "./request";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      {/* <h2>React</h2> */}
      <Navbar />
      <Banner />
      <Row
        title={"Netflix Originals"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title={"Action"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Animation"} fetchUrl={requests.fetchAnimationMovies} />
      <Row title={"Adventure"} fetchUrl={requests.fetchAdventureMovies} />
      <Row title={"Comedy"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Crime"} fetchUrl={requests.fetchCrimeMovies} />
      <Row title={"Documentary"} fetchUrl={requests.fetchDocumentaryMovies} />
      <Row title={"Drama"} fetchUrl={requests.fetchDramaMovies} />
      <Row title={"Family"} fetchUrl={requests.fetchFamilyMovies} />
      <Row title={"Fantasy"} fetchUrl={requests.fetchFantasyMovies} />
      <Row title={"Horror"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Sci-Fi"} fetchUrl={requests.fetchSciFiMovies} />
      <Row title={"Thriller"} fetchUrl={requests.fetchThrillerMovies} />
      <Row title={"History"} fetchUrl={requests.fetchHistoryMovies} />
      <Row title={"War"} fetchUrl={requests.fetchWarMovies} />
    </div>
  );
}

export default App;
