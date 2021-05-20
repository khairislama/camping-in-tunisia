import React from 'react'
import Moment from 'react-moment'

export default function LeftInfos({ userInfo }) {
  return (
    <div className="col-md-4">
        <div className="profile-work">
            <p>user info</p>
            <a>{userInfo.surname}</a><br/>
            <a><Moment format="DD-MM-YYYY">{ userInfo.created }</Moment></a><br/>
            { userInfo.age > 15 && <><a href=""> { userInfo.age } </a><br/></> }
            <a>{userInfo.from}</a><br/>
            <a>{userInfo.adresse}</a><br/>
            <a>{userInfo.situation}</a><br/>
            <p>Activities</p>
            <a>{userInfo.nblogs} blogs</a><br/>
            <a>{userInfo.nCampgrounds} campgrounds</a><br/>
            <a>{userInfo.ncomments} comments</a><br/>
            <a>{userInfo.nlikes} likes</a><br/>
        </div>
    </div>
  )
}
