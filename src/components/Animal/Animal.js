import React from 'react'
import './Animal.css'

export function Animal(props) {
  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <img alt={props.name} src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
      <span className="name">{props.name}</span>
      <span>{props.type}</span>
      <span>{props.says}</span>
    </div>
  )
}
