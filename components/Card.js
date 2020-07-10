import React from 'react'
import './styles/Card.css'

export default (props) => {
  return (
    <div className="card"
      style={
        {
          backgroundImage: `url(https://github.com/pedroBryanCH/react-01/blob/master/images/circles.png?raw=true), linear-gradient(to right, ${props.leftColor}, ${props.rightColor})`
        }
      }
    >
      <div className="card__image-container">
        <img src={props.img} class="card__image" alt="iamgen de card"/> 
      </div>
      <div className="card__text-content">
        <h1 className="card__title">{props.title}</h1>
        <p className="card__description">{props.description}</p>
      </div>
    </div>
  )
}