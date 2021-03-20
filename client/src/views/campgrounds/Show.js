import React from 'react'
import UserCampground from '../../components/campgroundComponents/UserCampground'
import CampgroundShow from '../../components/campgroundComponents/CampgroundShow'
import CommentShow from '../../components/campgroundComponents/CampgroundComments'

export default function show() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-3" >
                <p className="lead">Tunisia-camping</p>
                <div className="list-group">
                    <li className="list-group-item active">Info 1</li>
                    <li className="list-group-item">Info 2</li>
                    <li className="list-group-item">Info 3</li>
                </div>
                <UserCampground />
            </div>
            <div className="col-md-9">
                <CampgroundShow />
                <CommentShow />
            </div>
        </div>
    </div>
  )
}
