import React, {useState, useEffect} from "react"
import './App.css'
import PeliService from './services/Peli'

const PelitList = () => { // vastaava kuin function PelitList() {...

const [pelit, setPelit] = useState([])

// UseEffect funktio suoritetaan aina kun komponentti ladataan 1. kerran
useEffect(() => {
    PeliService.getAll()
    .then(data => setPelit(data))
} , [])

return(
    <div>
            {pelit && pelit.map(p => 
                <div>
                    <h4>{p.nimi}</h4>
                    <h5>Tekijä: {p.tekijä}</h5>
                    <p>Julkastu: {p.julkaisuvuosi}</p>
                </div>
                )}

    </div>
)


}

export default PelitList