import axios from 'axios';
import React, { useContext, useRef, useState } from 'react'
import '../../assets/stylesheets/campgroundComments.css'
import AuthConext from '../../context/AuthContext';
import CommentBlock from './CommentBlock';

function CampgroundComments(props) {
  const [commentText, setCommentText] = useState("");
  const commentInputRef = useRef(null);

  async function saveComment(e) {
      e.preventDefault();
      try{
          const commentData = {
              text: commentText
          }
          await axios.post(`http://localhost:3001/api/campgrounds/${props.campground.campground._id }/comments/`, commentData);
          props.getCampground();
          setCommentText("");
      }catch(err){
          console.error(err);
      }
  }

  function RenderComments(){
    return props.campground.campground.comments.map((comment, index)=>{      
        return (
            <CommentBlock comment={comment} index={index} campgroundID={props.campground.campground._id} setCommentText={setCommentText} commentInputRef={commentInputRef} />
        )
    })
  }

  return (
    <>
      <div className="container" style={{ marginTop:"20px", background:"#eee" }}>
        <div className="row">
            <div className="col-md-8 mb-3">
                {RenderComments()}
            </div>
        </div>
      </div>
      <div>
        <form onSubmit={saveComment}>
            <input type="text" placeholder="add new comment" 
            name="commentText" ref={commentInputRef}
            onChange={(e) => setCommentText(e.target.value)}
            value={commentText}
            />
            <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default CampgroundComments;