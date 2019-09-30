import React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

import PokemonList from '../components/PokemonList';

const FETCH_POKEMONS = gql`
{
  pokemons(first: 100) {
    id
    number
    name
    maxCP
    maxHP
    image
    types
  }
}
`;

const App = () => (
  <Query query={FETCH_POKEMONS}>
    {({ data, loading }) => {
      if (loading || !data) {
        return <div className="col-md-12">Loading data</div>;
      }
      return (
        <PokemonList list={data.pokemons} />
      );
    }}
  </Query>
);


export default App;