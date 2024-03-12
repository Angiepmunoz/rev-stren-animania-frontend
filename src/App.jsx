import { useState, useEffect } from "react";
import axios from "axios";
import Animes from "./components/Animes";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

const API = import.meta.env.VITE_API;

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="anime-section">
        <Animes />
      </section>
      <Footer/>
    </div>
  );
}

export default App;

// Our components will always start off with a capital letter
// when we use function declarations or arrow functions these are called functional components
// can only return one parent element
