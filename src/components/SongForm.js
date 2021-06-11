import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { persist } from "../actions";

function SongForm() {
  const dispatch = useDispatch();
  //   formData is object die in array van songs gaat
  const formData = {};
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.key = title + artist;
    formData.title = title;
    formData.artist = artist;
    formData.genre = genre;
    formData.rating = rating;
    dispatch(persist(formData));
  };

  return (
    <div>
      <input
        placeholder="Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        placeholder="Artist"
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="Genre">Genre</option>
        <option value="Rock">Rock</option>
        <option value="Reggae">Reggae</option>
        <option value="Klassiek">Klassiek</option>
      </select>
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="Rating">Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SongForm;
