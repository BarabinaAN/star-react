import React from 'react'
import { Link } from 'react-router-dom'
import ErrorBoundry from '../../error-boundry'

import './404-page.css'


const ErrorPage = () => {
    return (
        <ErrorBoundry>
            <h2>404 error</h2>
            <p>Sorry, we do not have a page at this address</p>
            <p>
                You can go to the 
                <Link to='/'>  main page </Link>
                , or try again
            </p>
        </ErrorBoundry>
    )
}

export default ErrorPage