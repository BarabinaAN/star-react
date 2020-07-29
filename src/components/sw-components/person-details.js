import React from 'react'
import ItemDetails, { Record } from '../item-details'
import { withContext } from '../hoc-helper'


const PersonDetails = ({ itemId, swapiService }) => {
   const { getPerson, getPersonImg } = swapiService
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

export default withContext(PersonDetails)
