import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt='monster' src={`${props.monster.imageUrl}`} style={{ maxWidth: '200px', maxHeight: '200px', width: 'auto', height: 'auto' }}/>
        <h2>{props.monster.name}</h2>
        <div className='film-list'>
            <h3>Films:</h3>
            <ul>
                {props.monster.films.map((film, index) => (
                    <li key={index}>{film}</li>
                ))}
            </ul>
        </div>
    </div>
);

export default Card;