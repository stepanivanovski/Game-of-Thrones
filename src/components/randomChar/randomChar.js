import React, { Component} from "react";
import serviceGOT from "../../services/serviceGOT";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error/error";

import "./randomChar.css";
export default class RandomChar extends Component {

  state = {
    char: {},
    loading: true,
    error: false
  }  

  gotService = new serviceGOT(); 

  componentDidMount() {
    this.updateChar();
    this.timerId = setInterval(() => this.updateChar(), this.props.interval)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  
  static defaultProps = {
    interval: 5000
  }
  
  static propTypes = {
    interval: (props, propName, componentName) => {
      const value = props[propName];
      
      if (typeof value ==='number' && !isNaN(value)) {
        return null
      }
      return new TypeError(`${componentName}: ${propName} must to be a number`)
    }
  }   

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updateChar = () => {
    console.log("update");
    const id = Math.floor(Math.random()*140 + 25);
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

// const RandomChar = ({interval}) => {
//   const [char, setChar] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
  
//   const gotService = new serviceGOT(); 

//   const onError = () => {
//     setError(true);
//     setLoading(false);
//   }

//   const updateChar = () => {
//     console.log("update");
//     const id = Math.floor(Math.random()*140 + 25);
//     gotService.getCharacter(id)
//       .then((char) => {
//         setChar(char);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.log(error);
//         onError();
//       })  
//   }
 
//   useEffect(() => {
//     const timer = setInterval(() => updateChar(), interval)
//     return () => clearInterval(timer);
//   });

//   const content = (loading) ? <Spinner/> : (error) ? <ErrorMessage/> : <View char={char}/> 

//   return (
//     <div className="random-block rounded mb-4">
//       {content}
//     </div>
//   )
// }
// export default RandomChar;






 