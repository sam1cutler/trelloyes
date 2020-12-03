import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

const sampleCards = [
    {id: 'b', title: 'Second card', content: 'lorem ipsum' },
    { id: 'c', title: 'Third card', content: 'lorem ipsum' },
    { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
    { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
    { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
    { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
    { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' }
]

describe('List component', () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List header='Second list' cards={sampleCards}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the List component as expected with the "Second List" cardlist.', () => {
        const tree = renderer
          .create(<List header='Second list' cards={sampleCards}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });

})