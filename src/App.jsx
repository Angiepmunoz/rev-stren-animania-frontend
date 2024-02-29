import {useState} from "react"
import './App.css'

function App() {
  const [click, setClick] = useState(1) // useState returns an array that we descructure. The first element is the initial state and the second is the set function 

  // let click =  1;
  function handleClick(){
   setClick(click + 1)
  }

   return <div onClick={handleClick}>Click: {click}</div>
}

export default App

// Our components will always start off with a capital letter
// when we use function declarations or arrow functions these are called functional components
// can only return one parent element 
