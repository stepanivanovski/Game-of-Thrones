import React from 'react';
import ItemList from '../itemList/itemList';
import ItemDetails, { Field } from '../itemDetails/itemDetails';
import ErrorMessage from '../error/error';
import serviceGOT from '../../services/serviceGOT';
import RowBlock from '../rowBlock/rowBlock';

export default class CharacterPage extends React.Component {

  state = {
    selectedChar: null,
    error: false
  }

  gotService = new serviceGOT();

  onItemSelected = (id) => {
    this.setState({
      selectedChar: id
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
        getData={this.gotService.getAllCharacters}
        renderItem={({name, gender}) => { return `${name} ${gender}`}}/>
    );

    const charDetails = (
      <ItemDetails 
        itemId={this.state.selectedChar}
        getData={this.gotService.getCharacter}>
          <Field field='gender' label='Gender'/>
          <Field field='born' label='Born'/>
          <Field field='died' label='Died'/>
          <Field field='culture' label='Culture'/>
      </ItemDetails>
    );

    return (
      <RowBlock left={itemList} right={charDetails}/>
    )
  }
}