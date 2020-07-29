import React from 'react'
import { ServiceConsumer } from '../context'

const withContext = (View) => {
   return (props) => {
      return (
         <ServiceConsumer>
            {
               (swapiService) => {
                  return (
                     <View {...props} swapiService={swapiService}/>
                  )
               }
            }
         </ServiceConsumer>
      )
   }
}
export default withContext