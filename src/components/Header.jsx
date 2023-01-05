import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Home from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import './Header.css'
import HeaderOptions from './HeaderOptions';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="/static/linkedin.png" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOptions Icon={Home} title='Home' />
                <HeaderOptions Icon={SupervisorAccount} title='Groups' />
                <HeaderOptions Icon={SupervisorAccount} title='Groups' />
                <HeaderOptions Icon={SupervisorAccount} title='Groups' />
                <HeaderOptions Icon={SupervisorAccount} title='Groups' />
            </div>

        </div>
    )
}

export default Header