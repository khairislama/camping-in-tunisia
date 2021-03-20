import React from 'react'

export default function CampgroundHeader() {
  return (
    <header className="jumbotron">
            <div className="container">
                <h1 className="font-weight-bold text-center">Welcome to Tunisia-camping</h1>
                <p className="text-center">
                    view our hand-picked campgrounds from all over Tunisia!<br/>
                        If you're favourite campground is not picked yet, you can add it yourself
                </p>
                <p className="text-center">
                    <a className="btn btn-primary btn-large" href="/campgrounds/new">Add a new campground</a>
                </p>
            </div>
    </header>
  )
}
