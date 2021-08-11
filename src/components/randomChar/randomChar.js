import React, { Component } from "react";
import serviceGOT from "../../services/serviceGOT";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error/error";

import "./randomChar.css";
export default class RandomChar extends Component {
  constructor(props) {
    super(props); 
    this.updateChar();
  }
  
  gotService = new serviceGOT(); 

  state = {
    char: {},
    loading: true,
    error: false
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updateChar() {
    // const id = Math.floor(Math.random()*140 + 25);
    const id = 1000;
    this.gotService.getCharacter(id)
      .then((char) => {
        this.setState({
          char,
          loading: false
        })
      })
      .catch(error => {
        console.log(error);
        this.onError();
      })
  }

  render() {
    const { char, loading, error } = this.state;

    const content = (loading) ? <Spinner/> : (error) ? <ErrorMessage/> : <View char={char}/> 

    return (
      <div className="random-block rounded mb-4">
        {content}
      </div>
    );
  }
}

const View = ({char}) => {
  const {name, gender, born, died, culture} = char;

  return (
    <React.Fragment>
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender</span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born</span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died</span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture</span>
          <span>{culture}</span>
        </li>
      </ul>
    </React.Fragment>
  )
}