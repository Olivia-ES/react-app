import { Route, Routes } from "react-router-dom";
import "./App.css";
import CandyList from "./components/CandyList.jsx";
import Home from "./components/Home.jsx";

import Navbar from "./components/Navbar.jsx";
import Popular from "./components/Popular.jsx";
import Upcoming from "./components/Upcoming.jsx";


function App() {
  

  return (
    <>
      <header>
        <h1>Rad Movies</h1>
        <p>
          Lorem ipsum w dolor sit amet consectetur adipisicing elit. Officiis
          illo cumque sit dignissimos, consectetur nemo possimus accusamus
          maxime excepturi molestiae nesciunt, laborum corrupti quis asperiores!
        </p>
      </header>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/candylist" element={<CandyList />} />
        </Routes>
      </main>
      <footer>
        <h3>Created by: Olivia Eagle Speaker</h3>
        <p>data sourced from</p>
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" width={300} height={300}></img>
      </footer>
    </>
  );
}

export default App;
