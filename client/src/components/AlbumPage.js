import React, { useState, useEffect } from "react";
import AlbumCard from "./AlbumCard";

function AlbumPage() {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch("/albums")
        .then((r) => r.json())
        .then((data) => setAlbums(data))
    }, [])


    return (
        <>
        {albums.map((album) => {
            <AlbumCard key={album} album={album} />
        })}
        </>
    )
}

export default AlbumPage;
