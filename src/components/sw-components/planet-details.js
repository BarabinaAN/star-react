import React from 'react'
import ItemDetails, { Record } from '../item-details'
import { withContext } from '../hoc-helper'


const PlanetDetails = (props) => {
   return (
      <ItemDetails {...props} >
         <Record field='model' label='Model' />
         <Record field='costInCredits' label='Cost In Credits' />
      </ItemDetails>
   )
}

const mapMethodsToProps = (swapiService) => {
   return {
      getData: swapiService.getPlanet,
      getImageUrl: swapiService.getPlanetImg
   }
}

export default withContext(PlanetDetails, mapMethodsToProps)