import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Moment from 'react-moment';
import { useRouteMatch } from 'react-router';
import '../../assets/stylesheets/profileShow.css'
import AuthConext from '../../context/AuthContext';
import LeftInfos from '../../components/usercomponents/LeftInfos'
import UpperInfos from '../../components/usercomponents/UpperInfos'

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
            <UpperInfos userInfo={userInfo} />
            <div className="row">
                <LeftInfos userInfo={userInfo} />
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
    <div className="container emp-profile" style={{ border: "1px solid", padding: "10px", boxShadow: "10px 15px 10px green" }}>
        {renderedUser}
    </div>
  )
}
