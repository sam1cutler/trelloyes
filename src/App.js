import React from 'react';
import './App.css';
import List from './List.js';

class App extends React.Component {
  
  // Establish the state containing the store
  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  }

  handleDeleteItem = (fingerprint) => {
    console.log(`User requested to delete the card.`)
    console.log(`The card has id ${fingerprint.cardID} and is in the list with id ${fingerprint.listID}.`)

    const newLists = this.state.lists.map( (listItem) => {
      let newCardIds = ''
      if (listItem.id === fingerprint.listID) {
        newCardIds = listItem.cardIds.filter(id => id !== fingerprint.cardID)
      } else {
        newCardIds = listItem.cardIds
      }
      return ({
        id: listItem.id,
        header: listItem.header,
        cardIds: newCardIds
      })
    })

    this.setState({
      lists: newLists
    })

  }

  newRandomCardGenerator = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  handleAddRandom = (listID) => {
    console.log('User requested to add a random item.')

    // generate random new card
    const newRandomCard = this.newRandomCardGenerator()
    console.log(newRandomCard)    

    // add this card's info to the allCards object in the state
    let tempCards = this.state.allCards
    tempCards[newRandomCard.id] = newRandomCard

    // update the lists object in the state
    const newLists = this.state.lists.map( (listItem, i) => {
      console.log('attempting to make a new list'+i)
      
      if (listItem.id === listID) {
        console.log(listItem.cardIds) 
        listItem.cardIds.push(newRandomCard.id)
        console.log(listItem.cardIds)
      } 
      return ({
        id: listItem.id,
        header: listItem.header,
        cardIds: listItem.cardIds
      })
    })

    console.log(newLists)

    this.setState({
      lists: newLists
    })
    
  }
  
  // Render array of List components w/ 'header' and 'cards' props
  makeListArray() {
    
    return (
      this.state.lists.map( (item) => {
        const headerValue = item.header;
        
        const cardsValue = item.cardIds.map( 
          (activeCard) => this.state.allCards[activeCard]);
        
        return (
          <li key={item.id} className='List'>
            <List 
              header={headerValue}
              cards={cardsValue}
              listID={item.id}
              onDeleteItem={this.handleDeleteItem}
              onAddRandom={this.handleAddRandom}
            />
          </li>
        );
      })
    ) 
  }

  render() {
    //console.log(this.state.allCards)
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
         <ul className='App-list'>
            {this.makeListArray()}
        </ul>
      </main>
    );
  }

}

export default App;
