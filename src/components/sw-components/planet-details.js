import React from 'react'
import ItemDetails, { Record } from '../item-details'
import { withContext } from '../hoc-helper'


const PlanetDetails = ({ itemId, swapiService }) => {
   const { getPlanet, getPlanetImg } = swapiService
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

export default withContext(PlanetDetails)