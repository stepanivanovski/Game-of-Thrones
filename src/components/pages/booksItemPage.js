import React from 'react';
import ItemDetails, { Field } from '../itemDetails/itemDetails';
import serviceGOT from '../../services/serviceGOT';


export default class BooksItem extends React.Component {
  gotService = new serviceGOT();

  render() {
    const {id} = this.props
    return (
      <ItemDetails 
        itemId={id}
        getData={this.gotService.getBook}>
          <Field field='numberOfPages' label='Number of page'/>
          <Field field='publiser' label='Publiser'/>
          <Field field='released' label='Released'/>
      </ItemDetails>
    );
  }
}