import React from 'react';
import './List.css';
import Card from './Card.js';



function List(props) {
    console.log('List.js ran, with the following props:');
    console.log(props);

    const arrayOfCards = props.cards.map( (item) => {
        return (
            <li key={item.id}>
                <Card title={item.title} content={item.content}/>
            </li>
        )
    })

    return (
        <div>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {arrayOfCards}
            </div>
            <button type='button' className='List-add-button'>
                + Add Random Card
            </button>
        </div>);
}


export default List;