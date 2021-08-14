import React from 'react';
import ItemList from '../itemList/itemList';
import ItemDetails, { Field } from '../itemDetails/itemDetails';
import ErrorMessage from '../error/error';
import serviceGOT from '../../services/serviceGOT';
import RowBlock from '../rowBlock/rowBlock';


export default class HousePage extends React.Component {

  state = {
    selectedHouse: null,
    error: false
  }

  gotService = new serviceGOT();

  onItemSelected = (id) => {
    this.setState({
      selectedHouse: id
    })
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  render() {

    if (this.state.error) {
      return <ErrorMessage/>
    }

    const itemList = (
      <ItemList 
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllHouses}
        renderItem={({name}) => name}/>
    );

    const houseDetails = (
      <ItemDetails 
        itemId={this.state.selectedHouse}
        getData={this.gotService.getHouse}>
          <Field field='region' label='Region'/>
          <Field field='words' label='Words'/>
          <Field field='titles' label='Titles'/>
          <Field field='overlord' label='Overlord'/>
          <Field field='ancestralWeapons' label='Weapons'/>
      </ItemDetails>
    );

    return (
      <RowBlock left={itemList} right={houseDetails}/>
    )
  }
}