import Animes from "./components/Animes";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import NewAnimeForm from "./components/NewAnimeForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const API = import.meta.env.VITE_API;

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <section className="anime-section">
          <Routes>
            <Route path="/animes" element={<Animes />} />
            <Route path="/animes/new" element={<NewAnimeForm/>} />
            {/* <Route path="/animes/:id" element={} /> */}
            {/* <Route path="/animes/:id/edit" element={} /> */}
          </Routes>
        </section>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// Our components will always start off with a capital letter
// when we use function declarations or arrow functions these are called functional components
// can only return one parent element



// Routes:
// /animes (all animes component) INDEX
// /animes/:id (SHOW one anime)
// /animes/:id/edit (EDIT)
// /animes/new (CREATE)
