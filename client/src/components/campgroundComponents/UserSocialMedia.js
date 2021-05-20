import React from 'react'

export default function UserSocialMedia({user}) {
  return (
    <div>
      { user.facebook && (
          <a href={`https://www.facebook.com/${user.facebook}/`} >
              <i class="fab fa-facebook"></i>
          </a>
      ) }
      { user.instagram && (
          <a href={`https://www.instagram.com/${user.instagram}/`} >
              <i class="fab fa-instagram"></i>
          </a>
      ) }
      { user.linkedIn && (
          <a href={`https://www.linkedin.com/in/${user.linkedIn}/`} >
              <i class="fab fa-linkedin"></i>
          </a>
      ) }
    </div>
  )
}
