import { Route, Routes } from "react-router-dom";
import "./App.css";
import CandyList from "./components/CandyList.jsx";
import Home from "./components/Home.jsx";

import Navbar from "./components/Navbar.jsx";
import Popular from "./components/Popular.jsx";
import Upcoming from "./components/Upcoming.jsx";

function App() {
  const name = "Your Mom";

  return (
    <>
      <header>
        <h1>Candy Listing For {name}</h1>
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
    </>
  );
}

export default App;
