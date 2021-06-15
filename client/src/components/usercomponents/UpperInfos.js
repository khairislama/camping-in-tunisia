import React, { useContext } from 'react'
import AuthConext from '../../context/AuthContext'
import NavigationTab from './NavigationTab'

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
                    <NavigationTab userInfo={userInfo} />
                </div>
            </div>
            {
                loggedIn?.userInfo?.id === userInfo?._id && (
                    <div className="col-md-2">
                        <a className="border profile-edit-btn" href={`/user/${userInfo._id}/edit`} >
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
