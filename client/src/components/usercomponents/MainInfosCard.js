import React from 'react'

export default function MainInfosCard({ userInfo }) {
  return (
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
                        <div className="row">
                            { userInfo.facebook && (
                                <a href={userInfo.facebook} target="_blank" className="col-md-3" >
                                    <i class="fab fa-facebook fa-5x"></i>
                                </a>
                            ) }
                            { userInfo.instagram && (
                                <a href={userInfo.instagram} target="_blank" className="col-md-3" >
                                    <i class="fab fa-instagram fa-5x"></i>
                                </a>
                            ) }
                            { userInfo.linkedIn && (
                                <a href={userInfo.linkedIn} target="_blank" className="col-md-3" >
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            ) }
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
  )
}
