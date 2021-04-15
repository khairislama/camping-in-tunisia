import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router';
import '../../assets/stylesheets/campgroundComments.css'

function Comment(props) {
    let match = useRouteMatch();
  const [visible, SetVisible] = useState(false)
  const handleVisible = () => {
    SetVisible(!visible)
  }

  function renderComments(){
    return props.campground.campground.comments.map((comment, index)=>{
        return (
            <div key={index} className="media g-mb-30 media-comment">
                <img 
                className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" 
                src="https://bootdey.com/img/Content/avatar/avatar7.png" 
                alt="Image Description"
                />
                <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                    <div className="g-mb-15">
                        <div className="row" >
                            <div className="col-8">
                                <h5 className="h5 g-color-gray-dark-v1 mb-0">{comment.author.firstname} {comment.author.lastname}</h5>
                            </div>                     
                        </div>
                        <span className="g-color-gray-dark-v4 g-font-size-12">5 days ago</span>
                    </div>              
                    <p>{comment.text}</p>              
                    <ul className="list-inline d-sm-flex my-0">
                        <li className="list-inline-item g-mr-20">
                        <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                            <i className="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                            178
                        </a>
                        </li>
                        <li className="list-inline-item g-mr-20">
                        <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                            <i className="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                            34
                        </a>
                        </li>
                        <li className="list-inline-item ml-auto">
                        <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                            <i className="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i>
                            Reply
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    })
  }  
  return (
    <div className="container" style={{ marginTop:"20px", background:"#eee" }}>
      <div className="row">
          <div className="col-md-8 mb-3">
              {renderComments()}
          </div>
      </div>
    </div>
  )
}

export default Comment;