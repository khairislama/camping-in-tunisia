import React from 'react'

export default function UserSocialMedia({user}) {
  return (
    <div>
      { user.facebook && (
          <a href={`${user.facebook}`} target="_blank" >
              <i class="fab fa-facebook fa-3x"></i>
          </a>
      ) }
      { user.instagram && (
          <a href={`${user.instagram}`} target="_blank" >
              <i class="fab fa-instagram fa-3x"></i>
          </a>
      ) }
      { user.linkedIn && (
          <a href={`${user.linkedIn}/`} target="_blank" >
              <i class="fab fa-linkedin fa-3x"></i>
          </a>
      ) }
    </div>
  )
}
