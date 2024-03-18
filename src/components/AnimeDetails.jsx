import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"


export default function AnimeDetails(){
    const [anime,setAnime] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();
    const API = import.meta.env.VITE_API;

    useEffect(()=>{
        axios.get(`${API}/animes/${id}`).then(({data})=>{
            setAnime(data.payload)
        }).catch(e => {
            console.warn(e)
        })
    })

    function handleDelete(){
        axios.delete(`${API}/animes/${id}`).then(response => {
            navigate("/animes")
        })
    }

    function handleEdit(){
        navigate(`/animes/${id}/edit`);
    }

    return (
        <section className="anime-details">
            <h2>{anime.name}</h2>
            <p>{anime.description}</p>
            <div className="anime-details-button">
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </section>
    )
}