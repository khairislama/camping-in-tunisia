import React from 'react'

export default function formCrud() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1 style={{ textAlign: "center" }}>Create a new campground</h1>
                <div style={{ width: "30%", margin: "25px auto" }}>
                    <form action="/campgrounds" method="POST">
                        <div className="form-group">
                            <input className="form-control" type="text" 
                                placeholder="name" name="name"
                            />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" 
                                placeholder="image url" name="image"
                            />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" 
                                placeholder="description" name="description"
                            />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="number" 
                                placeholder="price" name="price" 
                                min="0.01" step="0.01"
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-lg btn-primary btn-block">Submit!</button>
                        </div>
                    </form>
                    <a href="/campgrounds">Go back</a>
                </div>
            </div>
        </div>
    </div>
  )
}
