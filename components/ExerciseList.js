import React from 'react'
import Card from './Card'

export default (props) => {
  return (
    <>
      {
      props.exercises.map(exercise => {
        return (
          <Card
            key = {exercise.id}
            img = {exercise.img}
            title = {exercise.title}
            description = {exercise.description}
            leftColor = {exercise.leftColor}
            rightColor = {exercise.rightColor}
          />
        ) 
      })
      }
    </>
  )
}
