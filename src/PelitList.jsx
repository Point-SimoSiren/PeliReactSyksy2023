import React, {useState, useEffect} from "react"
import './App.css'
import PeliService from './services/Peli'
import PeliAdd from "./PeliAdd"

const PelitList = () => { // vastaava kuin function PelitList() {...

// Komponentin tila (state)
const [pelit, setPelit] = useState([])
const [adding, setAdding] = useState(false)
const [search, setSearch] = useState("")

// UseEffect funktio suoritetaan aina kun komponentti ladataan 1. kerran
useEffect(() => {
    PeliService.getAll()
    .then(data => setPelit(data))
} , [])

//// DELETE NAPIN TAPAHTUMANKÄSITTELIJÄ FUNKTIO 
// saa parametriksi koko peli olion)
const deleteGame = (peli) => {
    let answer = window.confirm("Poistetaanko peli: " + peli.nimi)
    if (answer === false){
        return
    }
    else {
        PeliService.remove(peli.peliId)
        .then(res => {
            alert(res)
            window.location.reload()
            }
          )
      }
    }


return(
    <div>
            <button className="add-btn" onClick={() => setAdding(true)}>
                Lisää uusi peli</button>

            {adding && <PeliAdd />}

            <input type="text" placeholder="Hae peliä" 
            value={search}
            onChange={({target}) => setSearch(target.value)} />

            {pelit && pelit.map(p => {
                let lowerCaseName = p.nimi.toLowerCase()
                if (lowerCaseName.indexOf(search) > -1) {
                
                return(
                    
                <div key={p.id} className="peli-div">

                    <button onClick={() => deleteGame(p)} className="poisto-btn">X</button>
                   
                    <h3>{p.nimi}</h3>
                    <h5>Tekijä: {p.tekijä}</h5>
                    <p>Julkastu: {p.julkaisuvuosi}</p>
                </div>
                    )
                }}
            )}
    </div>
 )


}

export default PelitList