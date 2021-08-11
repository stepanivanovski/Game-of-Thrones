import React from 'react';
import './error.css'

const ErrorMessage = () => {
  return (
    <>
      <img src={process.env.PUBLIC_URL + '/img/error.jpg'}></img>
      <span>Something goes wrong</span>
    </>  
  )
}

export default ErrorMessage;