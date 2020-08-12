import React from 'react'

function ProfileScroll() {
  return (
      <ul className="nav scroll-width mt-4 ml-4">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="pill" href="#post">Post</a>
        </li>
        <li className="nav-item ml-5">
          <a className="nav-link" data-toggle="pill" href="#followers">Followers</a>
        </li>
        <li className="nav-item ml-5">
          <a className="nav-link" data-toggle="pill" href="#following">Following</a>
        </li>
      </ul>
    
  )
}

export default ProfileScroll
