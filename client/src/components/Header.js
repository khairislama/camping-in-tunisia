import React from 'react'

export default function CampgroundHeader() {
  return (
    <header className="jumbotron" style={{ background: "url('/uploads/header.png')", backgroundRepeat: "no-repeat" }}>
            <div className="container" style= {{ color: "gold" }}>
                <h1 className="font-weight-bold text-center">Welcome to Tunisia-camping</h1>
                <p className="text-center font-weight-bold">
                    view our hand-picked campgrounds from all over Tunisia!<br/>
                        If you're favourite campground is not picked yet, you can add it yourself
                </p>
                <p className="text-center pt-5">
                    <a className="btn btn-success btn-large font-weight-bold" href="/campground/new">Add a new campground</a>
                </p>
            </div>
    </header>
  )
}
