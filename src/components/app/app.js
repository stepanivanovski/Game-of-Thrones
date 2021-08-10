import React from 'react';

import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';


const App = () => {
  return (
    <div> 
      <div className="container">
        <Header/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <RandomChar/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ItemList/>
          </div>
          <div className="col-md-6">
            <CharDetails/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;