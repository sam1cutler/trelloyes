import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card component', () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the Card component as expected for the "e" (fifth) card', () => {
        const tree = renderer
          .create(<Card title='Fifth card' content='lorem ipsum'/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });

})