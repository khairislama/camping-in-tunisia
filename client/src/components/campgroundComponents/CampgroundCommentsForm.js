import axios from 'axios';
import React, { useState } from 'react'

function CampgroundCommentsForm(props) {

    const [commentText, setCommentText] = useState("");

    async function saveComment(e) {
        e.preventDefault();
        try{
            const commentData = {
                text: commentText
            }
            await axios.post(`http://localhost:3001/api/campgrounds/${props.campgroundID}/comments/`, commentData);
        }catch(err){
            console.error(err);
        }
    }

  return (
    <div>
      <form onSubmit={saveComment}>
          <input type="text" placeholder="add new comment" 
          name="commentText"
          onChange={(e) => setCommentText(e.target.value)}
          value={commentText}
          />
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CampgroundCommentsForm;
