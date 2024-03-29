import React, { useState, useContext } from "react";
import ReviewCard from "./ReviewCard";
import { UserContext } from "../context/user";

function AlbumCard({ album, onUpdateReview, onAddReview, onDeleteReview  }) {
    const [content, setContent] = useState("")
    const [errors, setErrors] = useState([])
    const { user } = useContext(UserContext);
    const { title, artist, cover_image, genre, tracks } = album

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            album_id: album.id,
            content: content
          }),
        }).then((r) => {
          setContent("")
            if(r.ok){
                r.json().then((newReview) => onAddReview(newReview))
            }else{
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <div id="album_card">
        <h1 id="album_title">{title}</h1>
        <h2 id="album_artist">By: {artist}</h2>
        <img src={cover_image} alt="album" id="album_img"/>
        <h3 id="album_genre">{genre}</h3>
        <h4 id="tracks_header">Best Tracks:</h4>
        <p id="album_tracks">{tracks}</p>
        <h1>Review this album!</h1>
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        />
        <button id="new_review_button"type="submit">Submit Your Review!</button>
        </form>
        <h2>
            {album.reviews.map((review) => {
              if (user.id === review.user_id){
                return <ReviewCard key={review.id} review={review} onUpdateReview={onUpdateReview} onDeleteReview={onDeleteReview}/>
              }else{
                return  <p>{review.content}</p>     
              }
            })}
        </h2>
        <ul>
        {errors.map((err) => (
        <li key={err}>{err}</li>
        ))}
        </ul> 
        </div>
    )
}

export default AlbumCard;