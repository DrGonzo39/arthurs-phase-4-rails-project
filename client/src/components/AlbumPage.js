import React, { useState, useEffect } from "react";

function AlbumPage() {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch("/albums")
        .then((r) => r.json())
        .then((data) => setAlbums(data))
    })

    return (
        <>
        {albums.map((album) => {
            
        })}
        </>
    )
}

export default AlbumPage
