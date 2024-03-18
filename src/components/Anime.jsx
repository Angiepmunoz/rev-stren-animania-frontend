import {Link} from "react-router-dom"
export default function Anime({anime}) {
    // console.log(props)
  return (
    <tr>
      <td><Link to={`/animes/${anime.id}`} className="anime-link">{anime.name}</Link></td>
      <td>{anime.description}</td>
    </tr>
  );
}
