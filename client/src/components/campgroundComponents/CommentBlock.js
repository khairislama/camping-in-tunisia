import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import Moment from 'react-moment'
import AuthConext from '../../context/AuthContext';

export default function CommentBlock({comment, index, campgroundID, setCommentText, commentInputRef}) {
    const [liked, setLiked] = useState(false);
    const [nLikes, setNLikes] = useState(comment.nLikes)
    const [nDislikes, setNDislikes] = useState(comment.nDislikes)
    const [disliked, setDisliked] = useState(false);
    const isLiked = useRef(false)
    const isDisliked = useRef(false)
    const { loggedIn } = useContext(AuthConext)

    async function likeComment(id){
      try{
        isLiked.current.classList.toggle("far")
        isLiked.current.classList.toggle("fas")
        if (liked) setNLikes(prevNumber => prevNumber-1)
        if (!liked) setNLikes(prevNumber => prevNumber+1)
        const result = await axios.post(`http://localhost:3001/api/campgrounds/${campgroundID}/comments/${id}/like`)
        if (liked) setLiked(false)
        if (!liked) setLiked(true)
        
      }catch(err){
        console.error(err);
      }
    }
  
    async function dislikeComment(id){
      try{
        isDisliked.current.classList.toggle("far")
        isDisliked.current.classList.toggle("fas")
        if (disliked) setNDislikes(prevNumber => prevNumber-1)
        if (!disliked) setNDislikes(prevNumber => prevNumber+1)
        const result = await axios.post(`http://localhost:3001/api/campgrounds/${campgroundID}/comments/${id}/dislike`)
        if (disliked) setDisliked(false)
        if (!disliked) setDisliked(true)
      }catch(err){
        console.error(err);
      }
    }

    function handleReply(){
        setCommentText("@" +comment.author.firstname +"_" +comment.author.lastname +" : ");
        commentInputRef.current.focus();
      }
      
      function searchLiked(){
        if (comment.likes == []) return null;
        const alreadyLiked = comment.likes.includes(loggedIn.userInfo.id);
            if (alreadyLiked) 
            setLiked(true);
      }
    
      function searchDisliked(){
        if (comment.dislikes == []) return null;
        const alreadyDisliked = comment.dislikes.includes(loggedIn.userInfo.id);
            if (alreadyDisliked) 
            setDisliked(true);
      }

      useEffect(()=>{
        searchLiked()
        searchDisliked()
      }, [])

  return (
      <div key={index} className="media g-mb-30 media-comment">
                <img 
                className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" 
                src={`/uploads/users/${comment.author.userImage}`}
                alt="Image Description"
                />
                <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                    <div className="g-mb-15">
                        <div className="row" >
                            <div className="col-8">
                                <h5 className="h5 g-color-gray-dark-v1 mb-0">{comment.author.firstname} {comment.author.lastname}</h5>
                            </div>                     
                        </div>
                        <span className="g-color-gray-dark-v4 g-font-size-12"> <Moment fromNow>{ comment.created }</Moment> </span>
                    </div>              
                    <p>{comment.text}</p>              
                    <ul className="list-inline d-sm-flex my-0">
                            {
                                liked && !disliked && (
                                    <>
                                    <li className="list-inline-item g-mr-20">
                                        <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" onClick={() => likeComment(comment?._id)} >
                                            <i ref={isLiked} className="fas fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                                            {nLikes}
    
                                        </a>
                                    </li>  
                                    <li className="list-inline-item g-mr-20">
                                        <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" >
                                            <i ref={isDisliked} className="far fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                                            {nDislikes}
    
                                        </a>
                                    </li> 
                                    </>
                                )
                            }
                            {
                                !liked && !disliked && (
                                    <>
                                    <li className="list-inline-item g-mr-20">
                                        <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" onClick={() => likeComment(comment?._id)} >
                                            <i ref={isLiked} className="far fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                                            {nLikes}
    
                                        </a>
                                    </li>
                                    <li className="list-inline-item g-mr-20">
                                        <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" onClick={() => dislikeComment(comment?._id)} >
                                            <i ref={isDisliked} className="far fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                                            {nDislikes}
    
                                        </a>
                                    </li> 
                                    </>
                                )
                            }
                            {
                                disliked && !liked && (
                                    <>
                                    <li className="list-inline-item g-mr-20">
                                        <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" >
                                            <i ref={isLiked} className="far fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                                            {nLikes}
    
                                        </a>
                                    </li>
                                    <li className="list-inline-item g-mr-20">
                                        <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" onClick={() => dislikeComment(comment?._id)} >
                                            <i ref={isDisliked} className="fas fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                                            {nDislikes}
    
                                        </a>
                                    </li> 
                                    </>
                                )
                            }
                        <li className="list-inline-item ml-auto">
                        <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" onClick={handleReply}>
                            <i className="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i>
                            Reply
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
  )
}
