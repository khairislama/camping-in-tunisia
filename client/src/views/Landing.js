import React from 'react'
import '../assets/stylesheets/landing.css'

export default function Landing() {
  return (
    <div>
      <div id="landing-header">
          <h1>Welcome to Tunisia-Camping</h1>
          <a href="/campgrounds" class="btn btn-lg btn-success">view all Campgrounds</a>
      </div>
      <ul class="ladingSlideshow">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
    </div>
  )
}
