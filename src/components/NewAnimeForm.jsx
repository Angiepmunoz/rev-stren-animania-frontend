import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function NewAnimeForm() {
  const [anime, setAnime] = useState({
    name: "",
    description: "",
  });

  const navigate = useNavigate()
  const API = import.meta.env.VITE_API;

  function handleNameChange(event) {
    setAnime({ ...anime, name: event.target.value });
  }
  function handleDescriptionChange(event) {
    setAnime({ ...anime, description: event.target.value });
  }
  function handleSubmit(e) {
    console.log("IN THE HANDLE SUBMIT")
    e.preventDefault(); // why does it continue to refresh
    axios.post(`${API}/animes`, anime).then(({data}) => {
        // console.log(response)
        // setAnime({
        //     name: "",
        //     description: ""
        // })
        navigate(`/animes/${data.payload.id}`)

    }).catch(e=> console.warn(e))
  }
  return (
    <form className="new-anime-form" onSubmit={handleSubmit}>
      <h4>New Anime</h4>
      <label>
        Please enter the name of your anime:
        <input
          type="text"
          name="name"
          id="name"
          value={anime.name}
          onChange={(event) => handleNameChange(event)}
        />
      </label>
      <label>
        Please enter the description of your anime:
        <textarea
          type="text"
          name="description"
          id="description"
          value={anime.description}
          onChange={(event) => handleDescriptionChange(event)}
        />
      </label>
      <div className="form-button-container">
        <button
          type="submit"
          className="form-button"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
