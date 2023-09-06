import React, { useState } from "react";

function ReviewCard({ review, onUpdateReview }) {
    const [content, setContent] = useState(review.content)

    function handleSubmit(id){
        fetch(`/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: content
            }),
        })
        .then((r) => r.json())
        .then((updatedReview) => onUpdateReview(updatedReview))
    }

    function handleDeleteClick(id) {
        fetch(`/reviews/${id}`, {
            method: "DELETE"
        })
    }

    return (
        <>
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
        </>
    )
}

export default ReviewCard;