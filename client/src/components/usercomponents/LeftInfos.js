import React from 'react'
import Moment from 'react-moment'

export default function LeftInfos({ userInfo }) {
  return (
    <div className="col-md-4">
        <div className="profile-work">
            <p>user info</p>
            <a href="">{userInfo.surname}</a><br/>
            <a href=""><Moment format="DD-MM-YYYY">{ userInfo.created }</Moment></a><br/>
            { userInfo.age > 15 && <><a href=""> { userInfo.age } </a><br/></> }
            <a href="">{userInfo.from}</a><br/>
            <a href="">{userInfo.adresse}</a><br/>
            <a href="">{userInfo.situation}</a><br/>
            <p>Activities</p>
            <a href="">{userInfo.nblogs} blogs</a><br/>
            <a href="">{userInfo.nCampgrounds} campgrounds</a><br/>
            <a href="">{userInfo.ncomments} comments</a><br/>
            <a href="">{userInfo.nlikes} likes</a><br/>
        </div>
    </div>
  )
}
