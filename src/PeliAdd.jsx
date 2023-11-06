import React, {useState} from "react"
import './App.css'
import PeliService from './services/Peli'

const PeliAdd = () => {

// Statet jotka pitää kirjaa input kenttien sisällöstä
const [nimi, setNimi] = useState("")
const [tekijä, setTekijä] = useState("")
const [julkaisuvuosi, setJulkaisuvuosi] = useState("")
const [genreId, setGenreId] = useState(0)

// Funktio jota kutsutaan kun formi submitoidaan
const formSubmitted = (event) => {
    event.preventDefault()
    
    const uusiPeli = {
        nimi: nimi,
        tekijä: tekijä,
        julkaisuvuosi: julkaisuvuosi,
        genreId: genreId
    }

    PeliService.create(uusiPeli)
    .then(response => {
        alert(response.data)
        window.location.reload()
    })

}


return(
    <div className="add-div">
        <form onSubmit={formSubmitted}>
            <input type="text" placeholder="Nimi" value={nimi} 
            onChange={({target}) => setNimi(target.value)}
            required
            />

            <input type="text" placeholder="Tekijä" value={tekijä}
            onChange={({target}) => setTekijä(target.value)} 
            required />

            <input type="number" placeholder="Julkaisuvuosi" value={julkaisuvuosi}
            onChange={({target}) => setJulkaisuvuosi(target.value)} 
            required />

            <input type="number" placeholder="Genre ID" value={genreId}
             onChange={({target}) => setGenreId(target.value)} 
             required />

            <input type="submit" value="tallenna"/>
        </form>
    </div>
    )
}

export default PeliAdd