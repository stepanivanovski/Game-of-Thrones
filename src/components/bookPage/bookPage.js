import React from 'react';
import ItemList from '../itemList/itemList';
import ItemDetails, { Field } from '../itemDetails/itemDetails';
import ErrorMessage from '../error/error';
import serviceGOT from '../../services/serviceGOT';
import RowBlock from '../rowBlock/rowBlock';

export default class BookPage extends React.Component {
  
  state = {
    selectedBook: null,
    error: false
  }

  gotService = new serviceGOT();

  onItemSelected = (id) => {
    this.setState({
      selectedBook: id
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
        getData={this.gotService.getAllBooks}
        renderItem={({name}) => name}/>
    );

    const bookDetails = (
      <ItemDetails 
        itemId={this.state.selectedBook}
        getData={this.gotService.getBook}>
          <Field field='numberOfPages' label='Number of page'/>
          <Field field='publiser' label='Publiser'/>
          <Field field='released' label='Released'/>
      </ItemDetails>
    );

    return (
      <RowBlock left={itemList} right={bookDetails}/>
    )
  }
}