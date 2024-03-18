import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditAnimeForm() {
  const [anime, setAnime] = useState({
    name: "",
    description: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API;

  useEffect(() => {
    axios.get(`${API}/animes/${id}`).then(({ data }) => {
      setAnime(data.payload);
    });
  }, [id]);

  function handleChange(event) {
    setAnime({ ...anime, [event.target.name]: event.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    axios.put(`${API}/animes/${id}`, anime).then((response) => {
      navigate(`/animes/${id}`)
    }).catch(e=> {
        console.warn(e)
    })
  }

  return (
    <form className="new-anime-form" onSubmit={handleSubmit}>
      <h4>Edit Anime</h4>
      <label>
        Please enter the name of your anime:
        <input
          type="text"
          name="name"
          id="name"
          value={anime.name}
          onChange={(event) => handleChange(event)}
        />
      </label>
      <label>
        Please enter the description of your anime:
        <textarea
          type="text"
          name="description"
          id="description"
          value={anime.description}
          onChange={(event) => handleChange(event)}
        />
      </label>
      <div className="form-button-container">
        <button type="submit" className="form-button">
          Submit
        </button>
        <button onClick={()=>{navigate(-1)}}>Cancel</button>
      </div>
    </form>
  );
}
