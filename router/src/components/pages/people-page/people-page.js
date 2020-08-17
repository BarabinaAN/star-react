import React from 'react'
import { PersonDetails, PersonList } from '../../sw-components';
import Row from "../../row";
import ErrorBoundry from '../../error-boundry'
import { withRouter } from 'react-router-dom'

import './people-page.css'


const PeoplePage = ({ history, match }) => {
    const { id } = match.params
    
    return (
        <ErrorBoundry>
            <Row
                left={<PersonList onItemSelected={(itemId) => history.push(itemId)} />}
                right={<PersonDetails itemId={id} />}
            />
        </ErrorBoundry>
    )
}

export default withRouter(PeoplePage)