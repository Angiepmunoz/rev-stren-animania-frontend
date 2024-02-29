import {useState, useEffect} from "react"
import axios from "axios"
import './App.css'

const API = import.meta.env.VITE_API;

function App() {
  // const [click, setClick] = useState(1) // useState returns an array that we descructure. The first element is the initial state and the second is the set function 

  // let click =  1;
  // function handleClick(){
  //  setClick(click + 1)
  // }

  //  return <div onClick={handleClick}>Click: {click}</div>
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
            {/* <tr>
              <td>anime name</td>
              <td>anime description</td>
            </tr>
            <tr>
              <td>anime name</td>
              <td>anime description</td>
            </tr>
            <tr>
              <td>anime name</td>
              <td>anime description</td>
            </tr>
            <tr>
              <td>anime name</td>
              <td>anime description</td>
            </tr> */}
          </tbody>
        </table>
    </section>
  )
}

export default App

// Our components will always start off with a capital letter
// when we use function declarations or arrow functions these are called functional components
// can only return one parent element 
