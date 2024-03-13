export default function Anime({anime}) {
    // console.log(props)
  return (
    <tr>
      <td>{anime.name}</td>
      <td>{anime.description}</td>
    </tr>
  );
}
