import React from 'react';
import './error.css'

const ErrorMessage = () => {
  return (
    <div className="error">
      <img src={process.env.PUBLIC_URL + '/img/warning.svg'}></img>
      <span>Something goes wrong</span>
    </div>  
  )
}

export default ErrorMessage;