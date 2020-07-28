import React, { Component } from 'react'
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ItemDetails, {Record} from '../item-details';
import Row from "../row";
import SwapiService from '../../services/swapi-service'
import ErrorBoundry from '../error-boundry'

import './people-page.css'

export default class PeoplePage extends Component {
    swapiService = new SwapiService;

    state = {
        selectedPerson: null,
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }


    render() {
        const { selectedPerson } = this.state
        const { getAllPeople, getPersonImg, getPerson } = this.swapiService

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={getAllPeople}
                renderItem={({ name, gender }) => `${name}  (${gender})`}
            />
        )
        const personDetails = (
            // <PersonDetails personId={selectedPerson} />
            <ItemDetails 
                itemId={selectedPerson} 
                getData = {getPerson}
                getImageUrl={getPersonImg}
            >
                <Record field='gender' label='Gender' />
                <Record field='eyeColor' label='Eye Color' />
            </ItemDetails>
        )


        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundry>
        )
    }
}