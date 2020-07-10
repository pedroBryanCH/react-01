import React from 'react'
import Card from './Card'

export default (props) => {
  return (
    <>
      {
      props.exercises.map(exercise => {
        return (
          <Card
            img = {exercise.img}
            title = {exercise.title}
            description = {exercise.description}
          />
        ) 
      })
      }
    </>
  )
}
