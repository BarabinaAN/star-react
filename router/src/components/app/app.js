
import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service'
import TestSwapiService from '../../services/test-swapi-service'
import PeoplePage from '../pages/people-page'
import PlanetPage from '../pages/planet-page'
import StarshipPage from '../pages/starship-page'
import { ServiceProvider } from '../context'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './app.css';

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? TestSwapiService : SwapiService
      return {
        swapiService: new Service()
      }
    })
  }

  render() {
    const { swapiService } = this.state

    return (
      <ServiceProvider value={swapiService}>
        <Router>
          <Header onServiceChange={this.onServiceChange}/>
          <RandomPlanet/>
          <Route path='/' exact>
            <h2>Welcome</h2>
          </Route>
          <Route path='/people' component={PeoplePage}/>
          <Route path='/planets' component={PlanetPage}/>
          <Route path='/starships' component={StarshipPage}/>
        </Router>
      </ServiceProvider>
    );
  }
};