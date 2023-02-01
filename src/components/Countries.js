import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Cards from './Cards'

const Countries = () => {
    //data stocker ds l'etat du composant, seul facaon de modifier c'est setData
    //déclare un useState
    const [data,setData] = useState([]);
    //pour créer notre sélecteur
    const[rangeValue,  setRangeValue] = useState(36);
    // changement avec les boutons radio selectionnés
    const[selectedRadio, setSelectedRadio]= useState();

//pour les boutons radio, on se créer une variable ou o stocke un tableau
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"]

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
                    onChange={(e) =>setRangeValue(e.target.value)}
                    />
                    {radios.map((continent) => (
                        <li>
                            <input 
                                type="radio" 
                                id={continent} 
                                name="continentRadio" 
                                //annuler le checked qd on annule la recherche
                                checked={continent === selectedRadio}
                                onChange={(e) => setSelectedRadio(e.target.id)}
                            />
                            <label htmlFor={continent}>{continent}</label>
                        </li>
                    ))}
            </ul>
            {/* //est ce qe sékected radio est trouves */}
            {selectedRadio && 
                <button onClick={()=> setSelectedRadio('')}>
                    Annuler la recherche
                </button>}
            <ul>
                {data
                // **1. D'ABORD IL FILTRE
                    //est ce que country.continent[0] inclus le selectedRadio que l'utilisateur veut voir
                    .filter((country) => country.continents[0].includes(selectedRadio))
                // **2. APRES UN TRIE
                    //trie en decroissant
                    .sort((a, b) => b.population - a.population)
                    //limiter affichage à un certain nombre
                // **3. APRES IL COUPE
                    .slice(0, rangeValue)
                // **4. AFFICHE
                    .map((country, index) => (
            //composant card avec une clé unique pour chaque élément
                <Cards key={index} country={country}/>
                ))}
                
            </ul>
        </div>
    )
}

export default Countries