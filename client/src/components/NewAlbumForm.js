import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';

function NewAlbumForm() {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [tracks, setTracks] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [errors, setErrors] = useState([])
    const { onAddAlbum } = useContext(UserContext);

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/albums", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            artist: artist,
            genre: genre,
            tracks: tracks,
            cover_image: coverImage
          }),
        }).then((r) => {
          setTitle("")
          setArtist("")
          setGenre("")
            if (r.ok) {
              r.json().then((newAlbum) => onAddAlbum(newAlbum));
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          })
      }

    return (
        <>
        <h1>Add an Album to your Collection</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Title:</label>
            <input
                type="text"
                id="username"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="username">Artist:</label>
            <input
                type="text"
                id="username"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
            />
            <label htmlFor="username">Genre:</label>
            <input
                type="text"
                id="username"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            />
            <label htmlFor="username">Tracks:</label>
            <input
                type="text"
                id="username"
                value={tracks}
                onChange={(e) => setTracks(e.target.value)}
            />
            <label htmlFor="username">Cover Image:</label>
            <input
                type="text"
                id="username"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
            />
            <button type="submit">Submit</button>
            <ul>{errors.map((err) => (
                <li key={err}>{err}</li>
             ))}</ul>
        </form>
        </>
    )

}

export default NewAlbumForm;