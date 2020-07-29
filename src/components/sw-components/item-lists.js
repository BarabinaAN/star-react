import React from 'react';
import ItemList from '../item-list'
import { withData } from '../hoc-helper'
import SwapiService from '../../services/swapi-service';


const { getAllPeople, getAllStarships, getAllPlanets } = new SwapiService();

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

const PersonList = withData(withChildrenList(ItemList, renderName), 
getAllPeople)

const PlanetList = withData(withChildrenList(ItemList, renderName), 
getAllPlanets)

const StarshipList = withData(withChildrenList(ItemList, renderNameAndModel), 
getAllStarships)

export {
   PersonList,
   PlanetList,
   StarshipList
}