import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../assets/stylesheets/campgroundCard.css'

export default function CampgroundCard(props) {
  
  const [bookmarked, setBookmarked] = useState(false);
  const isBookmarked = useRef(false)
  const history = useHistory();
  
  function searchBookmark(){
    if (props.userBookmarks === []) return null;
    const alreadyBookmarked = props.userBookmarks.includes(props.campground._id);
        if (alreadyBookmarked) 
          setBookmarked(true);
  }

  useEffect(()=>{
    searchBookmark()
  }, [props])

  function showCampground(){
    history.push(`/campgrounds/${props.campground._id}`)
  }

  async function bookmarkToggle(){
    isBookmarked.current.classList.toggle("far")
    isBookmarked.current.classList.toggle("fas")
    //add bookmark in the back
    const result = await axios.post(`http://localhost:3001/api/users/${props.userID}/${props.campground._id}`);
  }

  return (
      <>
        {
        bookmarked && (
            <div className="col-md-4 col-sm-6 mb-3" >
                <div className="campgroundCardBox" >
                    <svg className="curve1" x="0px" y="0px" viewBox="0 0 400 200">
                        <path 
                        d="M398.938,143.806c-24.004,26.063-155.373,104.33-224.724,7.328 C69.626,4.846,0.5,71.583,0.5,71.583V1.5h398.629L398.938,143.806z">                        
                        </path>
                    </svg>
                    <img src={`/uploads/campgrounds/${props.campground.campgroundImages[0]}`} alt="..."/>
                    <div className="box-content">
                        <h3 className="title" onClick={ showCampground }> { props.campground.name }</h3>
                        <span className="post">{ props.campground.description.substring(0, 50) }...</span>
                        <ul className="icon">
                            <li>
                                <Link to={`/campgrounds/${props.campground._id}`}>
                                <i className="fas fa-search"></i>
                                </Link>
                            </li>
                            <li>
                                <a onClick={ bookmarkToggle }>
                                    <i ref={isBookmarked} className="fas fa-bookmark"></i> 
                                </a>
                            </li>
                        </ul>
                    </div>
                    <svg className="curve2" x="0px" y="0px" width="150px" height="150px" viewBox="0 0 150 50">
                        <path 
                        d="M1.114,7.567C87.544-33.817,150,150.5,150,150.5H1.361L1.114,7.567z">                          
                        </path>
                    </svg>
                </div>
            </div>
        )
        }
    </>
  )
}
