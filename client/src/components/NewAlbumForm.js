import React, { useState } from 'react';


function NewAlbumForm({ onAddAlbum }) {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [tracks, setTracks] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [errors, setErrors] = useState([])

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
            if (r.ok) {
              r.json().then((newAlbum) => onAddAlbum(newAlbum));
              setTitle("")
              setArtist("")
              setGenre("")
              setTracks("")
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          })
      }

    return (
        <>
        <h1>Add an Album to your Collection</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="artist">Artist:</label>
            <input
                type="text"
                id="artist"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
            />
            <label htmlFor="genre">Genre:</label>
            <input
                type="text"
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            />
            <label htmlFor="tracks">Tracks:</label>
            <input
                type="text"
                id="tracks"
                value={tracks}
                onChange={(e) => setTracks(e.target.value)}
            />
            <label htmlFor="cover_image">Cover Image:</label>
            <input
                type="text"
                id="cover_image"
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