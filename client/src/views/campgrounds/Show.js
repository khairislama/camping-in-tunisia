import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import axios from 'axios'
import UserCampground from '../../components/campgroundComponents/UserCampground'
import CampgroundShow from '../../components/campgroundComponents/CampgroundShow'
import CommentShow from '../../components/campgroundComponents/CampgroundComments'

export default function Show() {
    let match = useRouteMatch();
    const [campground, setCampground] = useState();  
    
    async function getCampground(){
        const result = await axios(
            `http://127.0.0.1:3001/api/campgrounds/${match.params.campgroundID}`,
        );
        setCampground(result.data);
    }
    
    useEffect(()=>{
        getCampground();
    }, []);
    let renderedCampground = campground !== null && campground !== undefined ? (
        <>
            <CampgroundShow campgroundResult={ campground }/> 
            <CommentShow campground={ campground } getCampground={getCampground}/>             
        </>
    ): null
    let renderedUser = campground !== null && campground !== undefined ? (
            <UserCampground author={campground.campground.author} />    
    ): null
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-3" >
                <p className="lead">TUNISIA-CAMPING</p>
                <div className="list-group">
                    <li className="list-group-item active">INFO 1</li>
                    <li className="list-group-item">INFO 2</li>
                    <li className="list-group-item">FORUM</li>
                </div>
                {renderedUser}
            </div>
            <div className="col-md-9">
                {renderedCampground}
            </div>
        </div>
    </div>
  )
}
