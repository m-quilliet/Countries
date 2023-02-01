import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Cards from './Cards'

const Countries = () => {
    //data stocker ds l'etat du composant, seul facaon de modifier c'est setData
    //déclare un useState
    const [data,setData] = useState([]);
    //pour créer notre sélecteur
    const[rangeValue,  setRangeValue] = useState(36);

    //useEffect
    //si joue qd le composant est monté (mise en place)
    useEffect (()=> {
        //axios va me chercher cet info et (then) montre le moi
        axios
        .get('https://restcountries.com/v3.1/all')
        //setData je te passe tous les pays
        .then((res) => setData(res.data));
    },[])
    return (
        <div className='countries'>
            {/* //barre de sélection */}
            <ul className='radio-container'>
                {/* //par défaut tu commences par valeur de rangeValue */}
                <input 
                    type="range" 
                    min="1" 
                    max="250" 
                    defaultValue={rangeValue}  
                    onChange={(e) =>setRangeValue(e.target.value)}/>
            </ul>
            <ul>
                {data
                    //limiter affichage à un certain nombre
                    .slice(0, rangeValue)
                    .map((country, index) => (
            //composant card avec une clé unique pour chaque élément
                <Cards key={index} country={country}/>
                ))}
                
            </ul>
        </div>
    )
}

export default Countries