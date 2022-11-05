import React from 'react'

export default function skills(props) {
  return (
    <div className="skills">
        <div>
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
        </div>
    </div>
  )
}

