import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'
import './person-details.css';

export default class PersonDetails extends Component {
  swapiService = new SwapiService

  state = {
    person: null,
    loading: true
  }

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      if (!this.state.loading) {
        this.setState({ loading: true })
      }
      this.updatePerson()
    }
  }

  updatePerson() {
    const { personId } = this.props
    
    if (!personId) {
      setTimeout(() => {
        this.setState({
          loading: false
        })
      }, 1000); 
      return 
    }

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({
          person,
          loading: false
        })
      })
  }


  render() {
    const { loading, person } = this.state
    const spinner = loading ? <Spinner /> : null
    const notSelect = !loading && !person ? <span>Выбирите пресонажа</span> : null
    const content = !loading && person ? <PersonView person={person}/> : null 


    return (
      <div className="person-details card">
        {spinner}
        {notSelect}
        {content}
      </div>
    )
  }
}

const PersonView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person

  return (
    <React.Fragment>
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}