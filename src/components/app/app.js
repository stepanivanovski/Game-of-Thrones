import React from 'react';

import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import CharacterPage from '../pages/characterPage';
import HousePage from '../pages/housePage';
import BookPage from '../pages/bookPage';
import BooksItem from '../pages/booksItemPage';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './app.css';

class App extends React.Component {
  state = {
    randomChar: true,
  }
  
  onToggleRandomChar = () => {
     this.setState(({randomChar}) => {
       return {
         randomChar:!randomChar
       }
     })
  }
  
  render() {
    const {randomChar} = this.state;
    const component = (randomChar) ? <RandomChar interval={5000}/> : null;

    return (
      <Router>
        <div className="app"> 
          <div className="container">
            <Header/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                {component}
                <button 
                  className='btn btn-primary mb-4'
                  onClick={this.onToggleRandomChar}>
                    Toggle random character
                </button>
              </div>
            </div>
            <Route path="/characters" component={CharacterPage}/>
            <Route path="/books" exact={true} component={BookPage}/>
            <Route path="/houses" component={HousePage}/>
            <Route path="/books/:id" render={
              ({match, location, history}) => {
                const {id} = match.params
                return <BooksItem id={id}/>
              }
            }/>
          </div>
        </div>
      </Router>
    );
  }
};

export default App;
