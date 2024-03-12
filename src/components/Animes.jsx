import {useState, useEffect} from "react"
import axios from "axios"


const API = import.meta.env.VITE_API;

export default function Animes() {

  const [animes, setAnimes] = useState([]);

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
               return (
                <tr key={i}>
                  <td>{anime.name}</td>
                  <td>{anime.description}</td>
                </tr>
               )
            })}
          </tbody>
        </table>
    </section>
  )
}

