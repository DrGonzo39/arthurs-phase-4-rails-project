import React, { useState } from "react";
import ReviewCard from "./ReviewCard";

function AlbumCard({ album, onUpdateReview, onAddReview, onDeleteReview  }) {
    const [content, setContent] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: content
          }),
        }).then((r) => {
            if(r.ok){
                r.json().then((newReview) => onAddReview(newReview))
            }else{
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <>
        <h1>{album.title}</h1>
        <img alt="album" src={album.cover_image}/>
        <h3>{album.genre}</h3>
        <p>{album.tracks}</p>
        <h1>Review this album!</h1>
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Submit Your Review!</button>
        </form>
        <h2>
            {reviews.map((review) => {
                <ReviewCard key={review.id} review={review} onUpdateReview={onUpdateReview} onDeleteReview={onDeleteReview}/>
            })}
        </h2>
        <ul>
        {errors.map((err) => (
        <li key={err}>{err}</li>
        ))}
        </ul> 
        </>
    )
}

export default AlbumCard;