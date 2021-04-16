import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/stylesheets/campgroundCard.css'

export default function campgroundCard(props) {
  return (
    <div className="col-md-4 col-sm-6 mb-3" >
        <div className="campgroundCardBox" >
            <svg className="curve1" x="0px" y="0px" viewBox="0 0 400 200">
              <path 
                d="M398.938,143.806c-24.004,26.063-155.373,104.33-224.724,7.328 C69.626,4.846,0.5,71.583,0.5,71.583V1.5h398.629L398.938,143.806z">                        
              </path>
            </svg>
            <img src={`/uploads/campgrounds/${props.campground.campgroundImages}`} alt="..."/>
            <div className="box-content">
                <h3 className="title">{ props.campground.name }</h3>
                <span className="post">{ props.campground.description.substring(0, 50) }...</span>
                <ul className="icon">
                    <li>
                      <Link to={`/campgrounds/${props.campground._id}`}>
                        <i className="fas fa-search"></i>
                      </Link>
                    </li>
                    <li>
                      <a href="#"><i className="fas fa-link"></i></a>
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
