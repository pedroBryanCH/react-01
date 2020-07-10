import React from 'react'
import './styles/Card.css'

export default (props) => {
  return (
    <div class="card">
      <div class="card__image-container">
        <img src={props.img} class="card__image"/> 
      </div>
      <div class="card__text-content">
        <h1 class="card__title">{props.title}</h1>
        <p class="card__description">{props.description}</p>
      </div>
    </div>
  )
}