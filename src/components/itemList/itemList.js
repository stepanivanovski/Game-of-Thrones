import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import "./itemList.css";

export default class ItemList extends Component {

  itemKey = 0;
  state = {
    itemList: null
  }

  componentDidMount() {
    const {getData} = this.props;

    getData()
    .then((itemList) => {
      this.setState({
        itemList
      })
    })
  }

  renderItems(arr) {
    return arr.map((item) => {
      const label = this.props.renderItem(item);
      return (
        <li 
          className="list-group-item" 
          key={++this.itemKey}
          onClick={() => {this.props.onItemSelected(item.id)}}>
            {label}
        </li>
      )   
    })
  }

  render() {
    const {itemList} = this.state;
    
    if (!itemList) {
      return <Spinner/>
    }

    const items = this.renderItems(itemList)

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
