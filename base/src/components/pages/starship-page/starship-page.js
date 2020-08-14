import React, { Component } from 'react'
import { StarshipList, StarshipDetails } from '../../sw-components';
import Row from "../../row";
import ErrorBoundry from '../../error-boundry'

export default class StarshipPage extends Component {
    state = {
        selectedItem: null,
    }

    onItemSelected = (id) => {
        this.setState({ selectedItem: id })
    }

    render() {
        const { selectedItem } = this.state
        
        return (
            <ErrorBoundry>
                <Row 
                    left={<StarshipList onItemSelected={this.onItemSelected} />}
                    right={<StarshipDetails itemId={selectedItem}/>}
                />
            </ErrorBoundry>
        )
    }
}