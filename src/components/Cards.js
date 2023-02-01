import React from 'react'

const Cards = ({country}) => {
    return (
        <li className='card'>
            <img src={country.flags.svg} alt={"drapeau" + country.translations.fra.common} />
            <div className='infos'>
                <h2>{country.translations.fra.common}</h2>
                <h4>{country.capital}</h4>
                {/* // avec un séparateur de millier */}
                <p>Pop: {country.population.toLocaleString()}</p>
            </div>
            
        </li>
    );
};
export default Cards;

