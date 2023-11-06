import React, {useState, useEffect} from "react"
import './App.css'
import PeliService from './services/Peli'
import PeliAdd from "./PeliAdd"

const PelitList = () => { // vastaava kuin function PelitList() {...

const [pelit, setPelit] = useState([])
const [adding, setAdding] = useState(false)

// UseEffect funktio suoritetaan aina kun komponentti ladataan 1. kerran
useEffect(() => {
    PeliService.getAll()
    .then(data => setPelit(data))
} , [])

return(
    <div>
            <button className="add-btn" onClick={() => setAdding(true)}>
                Lisää uusi peli</button>

            {adding && <PeliAdd />}

            {pelit && pelit.map(p => 
                <div key={p.id} className="peli-div">
                    <button className="poisto-btn">X</button>
                    <h3>{p.nimi}</h3>
                    <h5>Tekijä: {p.tekijä}</h5>
                    <p>Julkastu: {p.julkaisuvuosi}</p>
                </div>
                )}

    </div>
)


}

export default PelitList