import React, { useState } from 'react'
import '../../assets/stylesheets/campgroundComments.css'

export default function Comment() {
  const [visible, SetVisible] = useState(false)
  const handleVisible = () => {
    SetVisible(!visible)
  }
  return (
    <div className="container" style={{ marginTop:"20px", background:"#eee" }}>
      <div className="row">
          <div className="col-md-8">
              <div className="media g-mb-30 media-comment">
                  <img 
                    className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" 
                    src="https://bootdey.com/img/Content/avatar/avatar7.png" 
                    alt="Image Description"
                  />
                  <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                    <div className="g-mb-15">
                      <h5 className="h5 g-color-gray-dark-v1 mb-0">John Doe</h5>
                      <span className="g-color-gray-dark-v4 g-font-size-12">5 days ago</span>
                    </div>              
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                      felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>              
                    <ul className="list-inline d-sm-flex my-0">
                      <li className="list-inline-item g-mr-20">
                        <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                          <i className="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                          178
                        </a>
                      </li>
                      <li className="list-inline-item g-mr-20">
                        <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                          <i className="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                          34
                        </a>
                      </li>
                      <li className="list-inline-item ml-auto">
                        <a onClick={handleVisible} className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                          <i className="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i>
                          Reply
                        </a>
                      </li>
                      { visible && 
                      <input placeholder="asba"/>
                      }
                    </ul>
                  </div>
              </div>
          </div>
          <div className="col-md-8">
              <div className="media g-mb-30 media-comment">
                  <img 
                    className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" 
                    src="https://bootdey.com/img/Content/avatar/avatar1.png" 
                    alt="Image Description"
                  />
                  <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                    <div className="g-mb-15">
                      <h5 className="h5 g-color-gray-dark-v1 mb-0">John Doe</h5>
                      <span className="g-color-gray-dark-v4 g-font-size-12">5 days ago</span>
                    </div>              
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                      felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>              
                    <ul className="list-inline d-sm-flex my-0">
                      <li className="list-inline-item g-mr-20">
                        <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                          <i className="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                          178
                        </a>
                      </li>
                      <li className="list-inline-item g-mr-20">
                        <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                          <i className="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                          34
                        </a>
                      </li>
                      <li className="list-inline-item ml-auto">
                        <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                          <i className="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i>
                          Reply
                        </a>
                      </li>
                    </ul>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
