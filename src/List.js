import React from 'react';
import './List.css';
import Card from './Card.js';

function List(props) {
    //console.log('List.js ran, with the following props:');
    //console.log(props);
    //console.log(props)

    

    const arrayOfCards = props.cards.map( (item) => {
        
        const cardFingerprint = {
            listID: props.listID,
            cardID: item.id
        }
        
        return (
            <li key={item.id}>
                <Card 
                    title={item.title}
                    content={item.content}
                    fingerprint={cardFingerprint}
                    onDeleteItem={props.onDeleteItem}
                />
            </li>
        )
    })

    return (
        <div>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                <ul>
                    {arrayOfCards}
                </ul>
                <button
                    type='button'
                    className='List-add-button'
                    onClick={ () => props.onAddRandom(props.listID) }
                >
                    + Add Random Card
                </button>
            </div>
        </div>);
}

export default List;