import React, { Component } from 'react'
import { PlanetDetails, PlanetList } from '../../sw-components';
import Row from "../../row";
import ErrorBoundry from '../../error-boundry'

export default class PlanetPage extends Component {
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
                    left={<PlanetList onItemSelected={this.onItemSelected} />}
                    right={<PlanetDetails itemId={selectedItem}/>}
                />
            </ErrorBoundry>
        )
    }
}