import React, { Component } from 'react';
import Spinner from '../spinner'
import './item-details.css';

export default class ItemDetails extends Component {

  state = {
    item: null,
    loading: true,
    image: null,
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      if (!this.state.loading) {
        this.setState({ loading: true })
      }
      this.updateItem()
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props

    if (!itemId) {
      setTimeout(() => {
        this.setState({
          loading: false
        })
      }, 1000);
      return
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          loading: false,
          image: getImageUrl(item)
        })
      })
  }


  render() {
    const { loading, item, image } = this.state
    const spinner = loading ? <Spinner /> : null
    const notSelect = !loading && !item ? <span>Выбирите пресонажа</span> : null
    const content = !loading && item ? <ItemView item={item} image={image} children = {this.props.children}/> : null

    return (
      <div className="person-details card">
        {spinner}
        {notSelect}
        {content}
      </div>
    )
  }
}

const ItemView = ({ item, image, children }) => {
  const { name } = item

  return (
    <React.Fragment>
      <img className="person-image" src={image} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(children, (child) => {
              return React.cloneElement(child, { item })
            })
          }
        </ul>
      </div>
    </React.Fragment>
  )
}


const Record = ({ item, field, label }) => {

  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export { Record }