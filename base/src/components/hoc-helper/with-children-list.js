import React from 'react'


const withChildrenList = (fn) => (Wrapped) => {
   return (props) => {
      return (
         <Wrapped {...props}>
            {fn}
         </Wrapped>
      )
   }
}

export default withChildrenList