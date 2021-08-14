import React, { Component } from "react";

import "./itemDetails.css";

const Field = ({item, field, label}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export {Field}

export default class ItemDetails extends Component {
  
  state={
    item: null
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.itemId !== this.props.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const {itemId, getData} = this.props;
    if (!itemId) {
      return;
    }
    console.log("запрос");
    getData(itemId)
      .then((item) => {
        console.log(item);
        this.setState({item})
    })
  }

  render() {
    const {item} = this.state

    if (!item) {
      return <span className="select-error">Please select a character</span>
    }

    const {name} = item;

    return (
      <div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, {item})
            })
          }
        </ul>
      </div>
    );
  }
}
