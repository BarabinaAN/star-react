import React from 'react'

import './error-indicator.css'
import icon from './death-star.png'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt='error icon' />
            <h3>Упс...</h3>
            <span>Что-то пошло не так</span>
            <span>НО, наши дроиды уже работают над этим</span>
        </div>
    )
}

export default ErrorIndicator