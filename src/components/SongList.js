import { useSelector, useDispatch } from "react-redux";
import { persist } from "../actions";
import { FaRegTrashAlt } from "react-icons/fa";

function SongList() {
  const dispatch = useDispatch();
  const thisState = useSelector((state) => state);

  const handleAction = (event) => {
    event.preventDefault();
    if (event.target.value !== event.target[0].value) {
      dispatch(persist(thisState, event.target.value));
    }
  };
  const handleDelete = (event) => {
    const id = event.target.parentElement.parentElement.attributes.id.value;
    event.preventDefault();
    dispatch(persist(thisState, event.target.value, id));
  };
  /*
   * map naar li list
   *useSelector triggert automatisch rerender als store data verandert
   */
  const songList = useSelector((state) => {
    return state.songs.map((item) => {
      return (
        <tr
          className="songItem"
          key={item.key}
          id={item.key}
          title={item.title}
        >
          <td>{item.title}</td>
          <td>{item.artist}</td>
          <td genre={item.genre}>{item.genre}</td>
          <td rating={item.rating}>{item.rating}</td>
          <td className="delete-button">
            <button className="button" value="Delete" onClick={handleDelete}>
              <FaRegTrashAlt /> Delete
            </button>
          </td>
        </tr>
      );
    });
  });

  const handleFilterGenre = (event) => {
    if (event.target.value === "Genre:") {
      document.querySelectorAll(".songItem").forEach((item) => {
        item.classList.remove("hiddenGenre");
      });
    } else {
      document.querySelectorAll(".songItem").forEach((item) => {
        item.classList.remove("hiddenGenre");
        let itemGenre = item
          .querySelector("td[genre]")
          .getAttributeNode("genre").value;
        if (event.target.value !== itemGenre) {
          item.classList.add("hiddenGenre");
        }
      });
    }
  };

  const handleFilterRating = (event) => {
    if (event.target.value === "Rating:") {
      document.querySelectorAll(".songItem").forEach((item) => {
        item.classList.remove("hiddenRating");
      });
    } else {
      document.querySelectorAll(".songItem").forEach((item) => {
        item.classList.remove("hiddenRating");
        let itemRating = item
          .querySelector("td[rating]")
          .getAttributeNode("rating").value;
        if (event.target.value !== itemRating) {
          item.classList.add("hiddenRating");
        }
      });
    }
  };
  return (
    <div className="table">
      <table id="songTable">
        <thead className="tableHead">
          <tr className="theadRow">
            <th className="select">
              <select id="standard-select" onChange={handleAction}>
                <option>Title:</option>
                <option value="A-Z_Title">A-Z</option>
                <option value="Z-A_Title">Z-A</option>
              </select>
            </th>
            <th className="select">
              <select id="standard-select" onChange={handleAction}>
                <option>Artist:</option>
                <option value="A-Z_Artist">A-Z</option>
                <option value="Z-A_Artist">Z-A</option>
              </select>
            </th>
            <th className="select">
              <select id="standard-select" onChange={handleFilterGenre}>
                <option>Genre:</option>
                <option value="Rock">Rock</option>
                <option value="Reggae">Reggae</option>
                <option value="Klassiek">Klassiek</option>
              </select>
            </th>
            <th className="select">
              <select id="standard-select" onChange={handleFilterRating}>
                <option>Rating:</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>{songList}</tbody>
      </table>
    </div>
  );
}

export default SongList;
