
import './App.css';
// import { useState } from react
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import Index from "./Pages/Index";
// import NewOverwatchHero from "./Pages/NewOverwatchHero";
import EditOverwatchHero from "./Pages/EditOverwatchHero";
import OverwatchHerobyId from "./Pages/OverwatchHerobyId";
import FourOFour from "./Pages/FourOFour";
import Collections from "./Components/Collections";
import CollectionNewForm from "./Components/CollectionNewForm"
import CollectionEditForm from './Components/CollectionEditForm';
// const [OverwatcHero, setOverwatcHero] = useState 
//Components
import NavBar from "./Components/NavBar";
import OverwatchNewForm from './Components/OverwatchNewForm';
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
            <Route exact path="/OverwatchHero/:overwatchId" element={<OverwatchHerobyId/>} /> 
            <Route path="/OverwatchHero/:overwatch_id/Collections/new" element={<CollectionNewForm />} /> 
             <Route path="/OverwatchHero/:overwatchId/edit" element={<EditOverwatchHero />} /> 
            <Route exact path="/OverwatchHero/:overwatch_id/Collections" element={<Collections/>} />
            <Route path="/OverwatchHero/:overwatch_id/Collections/:edit" element={<CollectionEditForm />} /> 
            <Route path="/OverwatchHero/:overwatch_id/new" element={<OverwatchNewForm />} />
            <Route path="OverwatchHero/About" element={<About />} /> 
            
             <Route path="*" element={<FourOFour />} />   
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
