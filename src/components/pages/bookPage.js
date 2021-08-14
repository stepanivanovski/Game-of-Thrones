import React from 'react';
import ItemList from '../itemList/itemList';
import ErrorMessage from '../error/error';
import serviceGOT from '../../services/serviceGOT';
import { withRouter } from 'react-router';

class BookPage extends React.Component {
  
  state = {
    error: false
  }

  gotService = new serviceGOT();

  componentDidCatch() {
    this.setState({error: true})
  }

  render() {

    if (this.state.error) {
      return <ErrorMessage/>
    }

    return (
      <ItemList 
        onItemSelected={(itemId) => {
          this.props.history.push(`/books/${itemId}`)
        }}
        getData={this.gotService.getAllBooks}
        renderItem={({name}) => name}/>
    )
  }
}

export default withRouter(BookPage) 