import React from 'react'
import { StarshipList } from '../../sw-components';
import ErrorBoundry from '../../error-boundry'
import { withRouter } from 'react-router-dom'

const StarshipPage = ({ history }) => {
    return (
        <ErrorBoundry>
            <StarshipList onItemSelected={(itemId) => history.push(itemId)} />
        </ErrorBoundry>
    )
}

export default withRouter(StarshipPage)