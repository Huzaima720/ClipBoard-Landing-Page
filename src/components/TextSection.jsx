import React from 'react'
import "./styles/TextSection.css";


export default function TextSection({title , disc}) {
  return (
    <div className="text-section">
          <h1>{title}</h1>
          <p>{disc}</p>    
    </div>
  )
}
