import React, { useState } from "react";

function AlbumCard({ album }) {
    const [review, setReview] = useState("")

    return (
        <>
        <h1>{album.title}</h1>
        <img src={album.cover_image}/>
        <h3>{album.genre}</h3>
        <p>{album.tracks}</p>
        <button>Review this album!</button>
        </>
    )
}

export default AlbumCard;