import './App.css'
import React, {useState} from 'react'

function Laskuri() {

// Komponentin state on nimeltään luku.
// setLuku on funktio jolla luku voidaan asettaa uudelleen.
const [luku, setLuku] = useState(0)

  return (
    <div className="App">

      <h2>Laskuri</h2>
      <h3>{luku}</h3>

      <button onClick={() => setLuku(luku + 1)}>+</button>
      <button onClick={() => setLuku(luku - 1)}>-</button>


    </div>
  )
}

export default Laskuri

