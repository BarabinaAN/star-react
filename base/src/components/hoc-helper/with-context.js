import React from 'react'
import { ServiceConsumer } from '../context'

const withContext = (mapProps) => (View) => {
   return (props) => {
      return (
         <ServiceConsumer>
            {
               (swapiService) => {
                  const serviceProps = mapProps(swapiService)
                  return (
                     <View {...props} {...serviceProps}/>
                  )
               }
            }
         </ServiceConsumer>
      )
   }
}
export default withContext