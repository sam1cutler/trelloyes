import React from 'react';
import './App.css';

function App(props) {
  
  console.log('App.js ran, with the following props:')
  console.log(props);


  // Generate an array of List Component calls (?) with the appropriate
  //    'header' and 'cards' props...
  const arrayOfLists = props.store.lists.map( (item) => {
    const headerValue = item.header;
    console.log(`Current list is ${headerValue}.`);
    
    const cardsValue = item.cardIds.map( 
      (activeCard) => props.store.allCards[activeCard]);
    console.log('Array of card information for this list is:')
    console.log(cardsValue);
  
    return `<li><List header='${headerValue}' cards='${cardsValue}' /></li>`;
  });


  console.log(arrayOfLists);

  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        <ul>
          {arrayOfLists}
        </ul>
      </div>
    </main>
  );
}

export default App;
