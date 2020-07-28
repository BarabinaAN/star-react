
import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator'
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import ItemDetails, {Record} from '../item-details';
import SwapiService from '../../services/swapi-service'

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService;

  state = {
    showRandomPlanet: true,
    hasError: false
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onTogglePlanet = (e) => {
    e.preventDefault()
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
  }


  render() {
    const { showRandomPlanet, hasError } = this.state
    const { getStarshipImg, getAllPlanets, getStarship} = this.swapiService
    const planet = showRandomPlanet ? <RandomPlanet /> : null

    if (hasError) {
      return <ErrorIndicator />
    }

    return (
      <div>
        <Header />
        {planet}
        <button
          onClick={this.onTogglePlanet}
          type="button"
          className="btn btn-outline-warning"
        >
          Toggle Planet
        </button>
        <ErrorButton />

        <PeoplePage />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData = {getAllPlanets}
              renderItem = {({name}) => name}
            />
          </div>
          <div className="col-md-6">
            <ItemDetails 
              itemId={3} 
              getData = {getStarship}
              getImageUrl={getStarshipImg}
            > 
              <Record field='model' label='Model' />
              <Record field='costInCredits' label='Cost In Credits' />
            </ItemDetails>
          </div>
        </div>
      </div>
    );
  }
};