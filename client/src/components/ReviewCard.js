import React, { useState } from "react";

function ReviewCard({ review, onUpdateReview, onDeleteReview }) {
    const [content, setContent] = useState(review.content)
    const [errors, setErrors] = useState([])

    function handleSubmit(e){
        e.preventDefault();
        fetch(`/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: content
            }),
        }).then((r) => {
            if(r.ok) {
                r.json().then((updatedReview) => onUpdateReview(updatedReview))
            }else{
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    function handleDeleteClick() {
        fetch(`/reviews/${review.id}`, {
            method: "DELETE"
        });
        onDeleteReview(review);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Edit This Review</button>
            </form>
            <button onClick={handleDeleteClick}>Delete this review</button>
            <ul>
            {errors.map((err) => (
            <li key={err}>{err}</li>
            ))}
            </ul> 
        </div>
    )
}

export default ReviewCard;