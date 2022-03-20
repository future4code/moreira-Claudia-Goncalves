import React from 'react'
import axios from 'axios'

const Footer = () => {
  const apagarMatches = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/claudia/clear", {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <div>
      <button onClick={apagarMatches}>resetar matches</button>
    </div>
  )
}

export default Footer