import React from 'react'
import CampgroundSlider from './CampgroundSlider'

export default function CampgroundShow() {
  return (
    <div className="img-thumbnail">
        <CampgroundSlider />
        <div className="caption-full">
            <h4 className="float-right">TND 9/night</h4>
            <h4 className="text-monospace"><a href="#">nom du campground</a></h4>
            <p>description</p>
            <p className="font-italic">
                Submitted by firstname lastname
                <br/><span className="text-muted">Created at: campground.created.toDateString()</span>
            </p>
            <a href="/campgrounds/id/edit" className="btn btn-warning">Edit</a>
            <form className="delete-form" action="/campgrounds/id?_method=DELETE" method="POST">
                <button className="btn btn-danger">Delete</button>
            </form>
        </div>
    </div> 
  )
}
