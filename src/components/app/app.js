import React from 'react';

import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import CharacterPage from '../characterPage/characterPage';
import HousePage from '../housePage/housePage';
import BookPage from '../bookPage/bookPage';


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
    const component = (randomChar) ? <RandomChar/> : null;

    return (
      <div> 
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
          <CharacterPage/>
          <HousePage/>
          <BookPage/>
        </div>
      </div>
    );
  }
};

export default App;