import React from 'react';
import { withData } from '../hoc-helper'
import SwapiService from '../../services/swapi-service';
import './item-list.css';


const { getAllPeople } = new SwapiService();

const ItemList = ({ data, renderItem, onItemSelected }) => {

  const item = data.map((item) => {
    const { id } = item
    const label = renderItem(item)

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    )
  })


  return (
    <ul className="item-list list-group">
      {item}
    </ul>
  );
}

export default withData(ItemList, getAllPeople)