import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import './App.css';
import "./styles/index.scss"

function App() {
  return (
    //celui qui va englober toute notre application pr la navigation
    <div>
    <BrowserRouter>
      <Routes>
        {/* //déclarer nos routes */}
          {/* si jms c'est l'acceuil du site, tu ns fournir le composant suivant (element) */}
        <Route path="/" element={<Home/>}/>
        {/* qd tu trouves le chemin ds url  about, tu appelle le composant About */}
        <Route path="/about" element={<About/>}/>
        {/* //erreur url retour à la home */}
        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );

}

export default App;
