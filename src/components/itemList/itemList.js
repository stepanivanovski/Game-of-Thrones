import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import "./itemList.css";

class ItemList extends Component {
  itemKey = 0;
  
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
    const data = this.props.data
    const items = this.renderItems(data)

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}

const withData = (View) => {
  return class extends React.Component {
    state = {
      data: null
    }
  
    componentDidMount() {
      const {getData} = this.props;
  
      getData()
      .then((data) => {
        this.setState({
          data
        })
      })
    }
  
    render() {
      const {data} = this.state;
    
      if (!data) {
        return <Spinner/>
      }

      return <View {...this.props} data={data}/>
    }
  }
}

export default withData(ItemList);