import axios from 'axios';
import React from 'react'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import CampgroundSlider from './CampgroundSlider'

function CampgroundShow(props) {
  const match = useRouteMatch();
  const history = useHistory();

  async function deleteCampgroud(e){
    e.preventDefault();
    try{
      await axios.delete(`http://127.0.0.1:3001/api/campgrounds/${match.params.campgroundID}`);
      history.push(`/campgrounds`);
    }catch(err){
      console.error(err);
    }
  }

  return (
    <div className="img-thumbnail">
        <CampgroundSlider />
        <div className="caption-full">
            <h4 className="float-right">TND { props.campgroundResult.campground.price }/night</h4>
            <h4 className="text-monospace"><a href="#">{ props.campgroundResult.campground.name }</a></h4>
            <p>{ props.campgroundResult.campground.description }</p>
            <p className="font-italic">
                Submitted by { props.campgroundResult.campground.author.firstname } { props.campgroundResult.campground.author.lastname }
                <br/><span className="text-muted">Created at: { props.campgroundResult.campground.created } </span>
            </p>
            <Link to={`/campgrounds/${ props.campgroundResult.campground._id }/edit`}>
            <div className="btn btn-warning">Edit</div>
            </Link>
            <form onSubmit={ deleteCampgroud }>
                <div className="delete-form">
                  <button className="btn btn-danger" type="submit">Delete</button>
                </div>
            </form>
        </div>
    </div> 
  )
}


export default CampgroundShow;