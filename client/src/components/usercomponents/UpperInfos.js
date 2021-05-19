import React, { useContext } from 'react'
import AuthConext from '../../context/AuthContext'

export default function UpperInfos({ userInfo }) {
    const {loggedIn} = useContext(AuthConext)
  return (
    <div className="row">
            <div className="col-md-4">
                <div className="profile-img">
                    <img src={`/uploads/users/${userInfo.userImage}`} alt="user image"/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="profile-head">
                            <h2 className="font-weight-bold">
                                {userInfo.firstname} {userInfo.lastname.toUpperCase()}
                            </h2>
                            <h6>
                                {userInfo.bio} 
                            </h6>
                            <p className="proile-rating">
                                RATING : <span>{userInfo.rating}  /5 
                                <i className="fas fa-star"></i>
                                </span> ( {userInfo.nratings} users )
                            </p>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" 
                            id="home-tab" data-toggle="tab" 
                            href="#home" role="tab" aria-controls="home" 
                            aria-selected="true">About</a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" 
                            id="profile-tab" data-toggle="tab" 
                            href="#profile" role="tab" 
                            aria-controls="profile" aria-selected="false">Timeline</a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" 
                            id="profile-tab" data-toggle="tab" 
                            href="#followers" role="tab" 
                            aria-controls="followers" aria-selected="false">{userInfo.followers.length} followers</a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" id="profile-tab" 
                            data-toggle="tab" href="#following" role="tab" 
                            aria-controls="following" aria-selected="false">{userInfo.following.length} following</a>
                        </li>
                    </ul>
                </div>
            </div>
            {
                loggedIn?.userInfo?.id === userInfo?._id && (
                    <div className="col-md-2">
                        <a className="border profile-edit-btn" href="/users/<%= user._id %>/edit">
                            <i className="fas fa-edit mr-2 mt-5"></i> Edit Profile
                        </a>
                    </div>
                )
            }
            {
                loggedIn?.userInfo?.id !== userInfo?._id && (
                    <>
                    <div className="col-md-1">
                        <button className="btn btn-primary">follow</button>
                        <button className="btn btn-warning">message</button>
                    </div>
                    <div className="col-md-1">

                    </div>
                    </>
                )
            }
    </div>
  )
}
