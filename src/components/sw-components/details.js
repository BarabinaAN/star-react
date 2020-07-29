import React from 'react'
import ItemDetails, { Record } from '../item-details'
import SwapiService from '../../services/swapi-service'

const {
   getPerson,
   getPlanet,
   getStarship,
   getPersonImg,
   getPlanetImg,
   getStarshipImg,
} = new SwapiService();

const PersonDetails = ({ itemId }) => {
   return (
      <ItemDetails
         itemId={itemId}
         getData={getPerson}
         getImageUrl={getPersonImg}
      >
         <Record field='gender' label='Gender' />
         <Record field='eyeColor' label='Eye Color' />
      </ItemDetails>
   )
}

const PlanetDetails = ({ itemId }) => {
   return (
      <ItemDetails
         itemId={itemId}
         getData={getPlanet}
         getImageUrl={getPlanetImg}
      >
         <Record field='model' label='Model' />
         <Record field='costInCredits' label='Cost In Credits' />
      </ItemDetails>
   )
}

const StarshipDetails = ({ itemId }) => {
   return (
      <ItemDetails
         itemId={itemId}
         getData={getStarship}
         getImageUrl={getStarshipImg}
      >
         <Record field='model' label='Model' />
         <Record field='costInCredits' label='Cost In Credits' />
      </ItemDetails>
   )
}

export {
   PersonDetails,
   PlanetDetails,
   StarshipDetails
}