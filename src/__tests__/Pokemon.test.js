// Link.react.test.js
import React from 'react';
import Pokemon from '../components/Pokemon';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('Draw Insights component', () => {  
  const data = { "id": "UG9rZW1vbjowMDE=",
      "number": "001",
      "name": "Bulbasaur",
      "maxCP": 951,
      "maxHP": 1071,
      "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg",
      "types": [
        "Grass",
        "Poison"
      ]};
  const component = renderer.create(<Pokemon data={data} />);
  let json = component.toJSON();
  expect(json).toMatchSnapshot();  
});