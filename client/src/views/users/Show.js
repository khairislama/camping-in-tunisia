import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router';
import '../../assets/stylesheets/profileShow.css'
import AuthConext from '../../context/AuthContext';

export default function Show() {
    const [userInfo, setUserInfo] = useState();
    const match = useRouteMatch();
    const {loggedIn} = useContext(AuthConext);

    async function getUserInfo(){
        const result = await axios.get(
            `http://127.0.0.1:3001/api/users/${match.params.userID}`,
        );
        setUserInfo(result.data.user);
    }

    useEffect(()=>{
        getUserInfo();
    }, []);

    let renderedUser = userInfo !== null && userInfo !== undefined ? (
        <>
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
                                    <i className="fas fa-edit mr-2"></i> Edit Profile
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
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-work">
                        <p>user info</p>
                        <a href="">{userInfo.surname}</a><br/>
                        <a href="">{userInfo.created}</a><br/>
                        <a href="">{userInfo.from}</a><br/>
                        <a href="">{userInfo.adresse}</a><br/>
                        <a href="">{userInfo.situation}</a><br/>
                        <p>Activities</p>
                        <a href="">{userInfo.nblogs} blogs</a><br/>
                        <a href="">{userInfo.ncomments} comments</a><br/>
                        <a href="">{userInfo.nlikes} likes</a><br/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userInfo.firstname} {userInfo.lastname.toUpperCase()}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userInfo.username}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Last activity</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>To complete later</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p> {userInfo.phoneNumber} </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p> {userInfo.profession}  </p>
                                        </div>
                                    </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <p>timeline tab</p>
                        </div>
                        <div className="tab-pane fade" id="followers" role="tabpanel" aria-labelledby="followers-tab">
                            <p>followers tab</p>
                        </div>
                        <div className="tab-pane fade" id="following" role="tabpanel" aria-labelledby="following-tab">
                            <p>following tab</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ): null

  return (
    <div className="container emp-profile">
        {renderedUser}
    </div>
  )
}
