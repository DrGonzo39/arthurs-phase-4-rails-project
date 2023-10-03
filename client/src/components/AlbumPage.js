import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/user";
import AlbumCard from "./AlbumCard";
import NewAlbumForm from "./NewAlbumForm";

function AlbumPage() {
    const [albums, setAlbums] = useState([])
    const { user, setUser } = useContext(UserContext)

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
        const updatedAlbumReviews = [...albumToUpdate.reviews, newReview] 
        const updatedAlbum = {...albumToUpdate, reviews: updatedAlbumReviews}
        handleUpdateAlbum(updatedAlbum)
       setUser((prevState) => ({
        ...prevState, 
        albums: [...user.albums, updatedAlbum],
        reviews: [...user.reviews, newReview]
       }))
    }

    function handleUpdateReview(updatedReview) {
        const albumToUpdate = albums.find((album) => album.id === updatedReview.album_id)
        const updatedAlbumReviews = albumToUpdate.reviews.filter((review) => {
            if (review.id === updatedReview.id) {
                return updatedReview
            }else{
                return review
            }
        });
        handleUpdateAlbum(updatedAlbumReviews);
        setUser((prevState) => ({
            ...prevState,
            reviews: updatedAlbumReviews
        }))
    }

    function handleDeleteReview(review){
        const albumToUpdate = albums.find((album) => album.id === review.album_id)
        const updatedReviews = albumToUpdate.reviews.filter((deletedReview) => deletedReview.id !== review.id)
        albumToUpdate.reviews = updatedReviews;
        handleUpdateAlbum(albumToUpdate)
        const updatedUserAlbums = user.albums.filter((album) => album.id !== review.album_id)
        setUser((prevState) => ({
            ...prevState,
            albums: updatedUserAlbums
        }))
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
