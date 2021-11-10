import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { fetchNotifications } from '../features/notifications/notificationSlice'

export const Navbar = () => {
  const dispatch = useDispatch()

  const fetchNewNotification = () => {
    dispatch(fetchNotifications())
  }

  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">Notifications</Link>
          </div>
        </div>
        <button className="button" onClick={fetchNewNotification}>
          Refresh Notifications
        </button>
      </section>
    </nav>
  )
}
