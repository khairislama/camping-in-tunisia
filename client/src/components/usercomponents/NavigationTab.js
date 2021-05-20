import React from 'react'


export default function NavigationTab({userInfo}) {
  return (      
    <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
            <a className="nav-link active" 
            id="home-tab" data-toggle="tab" 
            href="#about" role="tab" aria-controls="home"             
            aria-selected="true">About</a>
        </li>
        <li className="nav-item"> 
            <a className="nav-link" 
            id="profile-tab" data-toggle="tab" 
            href="#timeline" role="tab" 
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
  )
}
