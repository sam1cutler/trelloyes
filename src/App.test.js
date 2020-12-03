import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import STORE from './store.js';
import renderer from 'react-test-renderer';

describe('App component', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App store={STORE}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the overall App as expected with the default store', () => {
    const tree = renderer
      .create(<App store={STORE}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
