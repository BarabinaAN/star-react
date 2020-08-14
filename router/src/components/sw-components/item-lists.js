import React from 'react';
import ItemList from '../item-list'
import { 
   withData, 
   withContext,
   withChildrenList, 
   compose 
} from '../hoc-helper'


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

const PersonList = compose(
                     withContext(mapPersonMethodsToProps),
                     withData,
                     withChildrenList(renderName)
                  )(ItemList)


const PlanetList = compose(
                     withContext(mapPlanetMethodsToProps),
                     withData,
                     withChildrenList(renderName)
                  )(ItemList)

const StarshipList = compose(
                        withContext(mapStarshipMethodsToProps),
                        withData,
                        withChildrenList(renderNameAndModel)
                     )(ItemList)

export {
   PersonList,
   PlanetList,
   StarshipList
}