import React from 'react'
import ItemDetails, { Record } from '../item-details'
import { withContext } from '../hoc-helper'


const StarshipDetails = ({ itemId, swapiService }) => {
   const { getStarship, getStarshipImg } = swapiService
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

export default withContext(StarshipDetails)