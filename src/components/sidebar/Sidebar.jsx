import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import StatItem from './StatItem'

const Sidebar = () => {
  return (
    <div className='sidebar'>

      <div className='sidebar__top'>
        <img src='./static/profile_2.jpg' alt='Profile cover' />
        <Avatar />
        <h2>Stivens Carrasquel</h2>
        <h4>loremipsun@gmail.com</h4>
      </div>

      <div className='sidebar__stats'>
        <StatItem title='Who viewed you' number={20} />
        <StatItem title='Who viewed you' number={20} />
      </div>

      <div className='sidebar__bottom'>

        <section className='sidebar__recent-item'>
          <p>
            Recent
          </p>
          <div className='sidebar__recent-actions'>
            <button className='sidebar__recent-icon'>
              <ExpandMoreIcon />
            </button>
          </div>

        </section>

      </div>

    </div>
  )
}

export default Sidebar
