import React from 'react'
import ItemDetails, { Record } from '../item-details'
import { withContext } from '../hoc-helper'


const PersonDetails = (props) => {
   return (
      <ItemDetails {...props} >
         <Record field='gender' label='Gender' />
         <Record field='eyeColor' label='Eye Color' />
      </ItemDetails>
   )
}

const mapMethodsToProps = (swapiService) => {
   return {
      getData: swapiService.getPerson,
      getImageUrl: swapiService.getPersonImg
   }
}

export default withContext(mapMethodsToProps)(PersonDetails)
