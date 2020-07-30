import React from 'react'
import ItemDetails, { Record } from '../item-details'
import { withContext } from '../hoc-helper'


const StarshipDetails = (props) => {
   return (
      <ItemDetails {...props} >
         <Record field='model' label='Model' />
         <Record field='costInCredits' label='Cost In Credits' />
      </ItemDetails>
   )
}
const mapMethodsToProps = (swapiService) => {
   return {
      getData: swapiService.getStarship,
      getImageUrl: swapiService.getStarshipImg
   }
}

export default withContext(StarshipDetails, mapMethodsToProps)