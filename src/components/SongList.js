import { useSelector } from "react-redux";

function SongList() {
  /*
   * map naar li list
   *useSelector triggert automatisch rerender als store data verandert
   */
  const songList = useSelector((state) => {
    return state.songs.map((item) => {
      return (
        <li key={item.key} title={item.title}>
          {item.title} {item.artist} {item.genre} {item.rating}
          {/* ga ik hier de delete button neerzetten? */}
        </li>
      );
    });
  });
  return (
    <div>
      {/* hier een header maken waarbij via dropdown click kan filteren */}
      <ul>{songList}</ul>
    </div>
  );
}

export default SongList;
