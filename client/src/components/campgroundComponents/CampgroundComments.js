import React, { useState } from 'react'
import CampgroundCommentsForm from './CampgroundCommentsForm'
import CampgroundCommentsList from './CampgroundCommentsList'

function CampgroundComments(props) {
  return (
    <>
      <CampgroundCommentsList campground={ props.campground } />
      <CampgroundCommentsForm campgroundID={ props.campground.campground._id }/>
    </>
  )
}

export default CampgroundComments;