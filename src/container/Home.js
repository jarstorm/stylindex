import React from 'react';
import { Query } from 'react-apollo';

import PokemonList from '../components/PokemonList';

import { FETCH_POKEMONS } from '../graphql.js';

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