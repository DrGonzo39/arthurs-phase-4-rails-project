import React, { useState, useEffect } from "react";
import AlbumCard from "./AlbumCard";
import NewAlbumForm from "./NewAlbumForm";

function AlbumPage() {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch("/albums")
        .then((r) => r.json())
        .then((data) => setAlbums(data))
    },[])

    function handleAddAlbum(newAlbum) {
        setAlbums([...albums, newAlbum])
    }

    function handleAddReview(newReview){
        const albumToUpdate = albums.find((album) => album.id === newReview.album_id)
        const updatedAlbum = [...albumToUpdate.reviews, newReview]
        handleUpdateAlbum(updatedAlbum)
    }

    function handleUpdateReview(updatedReview) {
        const albumToUpdate = albums.find((album) => album.id === updatedReview.album_id)
        const updatedAlbumReviews = albumToUpdate.reviews.map((review) => {
            if (review.id === updatedReview.id) {
                return updatedReview
            }else{
                return review
            }
        });
        handleUpdateAlbum(updatedAlbumReviews);
    }

    function handleDeleteReview(review){
        const albumToUpdate = albums.find((album) => album.id === review.album_id)
        const updatedReviews = albumToUpdate.reviews.filter((deletedBike) => deletedBike.id !== review.id)
        albumToUpdate.reviews = updatedReviews
        handleUpdateAlbum(albumToUpdate)
    }

    function handleUpdateAlbum(updatedAlbum) {
        const updatedAlbums = albums.map((album) => {
            if(album.id === updatedAlbum.id){
                return updatedAlbum
            }else{
                return album
            }
        })
        setAlbums(updatedAlbums);
    }


    return (
        <>
        <NewAlbumForm onAddAlbum={handleAddAlbum}/>
        {albums.map((album) => {
           return <AlbumCard key={album.id} album={album} onUpdateReview={handleUpdateReview} onAddReview={handleAddReview} onDeleteReview={handleDeleteReview} />
        })}
        </>
    )
}

export default AlbumPage;
