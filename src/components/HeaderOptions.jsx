import React from 'react'
import './HeaderOptions.css'

const HeaderOptions = ({ Icon, title }) => {

    return (
        <div className="header__option">
            {Icon && <Icon className="header__option-icon" />}
            <h3>{title}</h3>
        </div>
    )
}

export default HeaderOptions