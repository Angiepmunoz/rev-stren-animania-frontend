import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Anime from "./Anime";
import axios from "axios"


const API = import.meta.env.VITE_API;

export default function Animes() {

  const [animes, setAnimes] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
      axios.get(`${API}/animes`).then(({data})=>{
        console.log(data)
        setAnimes(data.payload)
      }).catch(e => console.warn("catch:", e))
  }, [])
  return (
    <section className="index">
        <table className="table">
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {animes.map((anime, i)=> {
               return <Anime key={i} anime={anime}/>
            })}
          </tbody>
        </table>
        <button onClick={()=>{navigate(`/animes/new`)}}>Add Anime</button>
    </section>
  )
}

