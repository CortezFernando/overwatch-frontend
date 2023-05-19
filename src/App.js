
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import NewOverwatchHero from "./Pages/NewOverwatchHero";
import EditOverwatchHero from "./Pages/EditOverwatchHero";
import OverwatchHeroById from "../Pages/OverwatchHeroById";
import FourOFour from "./Pages/FourOFour";



//Components
import NavBar from "./Components/Nav.Bar";
import About from "./Components/About.js";

function App() {
  return (
    <div className="App">
   <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/OverwatchHero" element={<Index />} />
            <Route exact path="/OverwatchHero/:overwatchId" element={<OverwatchHeroById/>} />
            <Route path="/OverwatchHero/new" element={<NewOverwatchHero />} />
            <Route path="/OverwatchHero/:overwatchId/edit" element={<EditOverwatchHero />} />
             <Route path="*" element={<FourOFour />} />  
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
