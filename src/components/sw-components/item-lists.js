import React from 'react';
import ItemList from '../item-list'
import { withData, withContext } from '../hoc-helper'


const withChildrenList = (Wrapped, fn) => {
   return (props) => {
      return (
         <Wrapped {...props}>
            {fn}
         </Wrapped>
      )
   }
}

const renderName = ({name}) => <span>{name}</span>
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>

const mapPersonMethodsToProps = (swapiService) => {
   return {
      getData: swapiService.getAllPeople
   }
}

const mapPlanetMethodsToProps = (swapiService) => {
   return {
      getData: swapiService.getAllPlanets
   }
}

const mapStarshipMethodsToProps = (swapiService) => {
   return {
      getData: swapiService.getAllStarships
   }
}

const PersonList = 
         withContext(
            withData(
               withChildrenList(ItemList, renderName)
            ), 
            mapPersonMethodsToProps
         )

const PlanetList = 
         withContext(
            withData(
               withChildrenList(ItemList, renderName)
            ), 
            mapPlanetMethodsToProps
         )

const StarshipList = 
         withContext(
            withData(
               withChildrenList(ItemList, renderNameAndModel)
            ), 
            mapStarshipMethodsToProps
         )

export {
   PersonList,
   PlanetList,
   StarshipList
}