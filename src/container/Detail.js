import React, {Component} from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom'

import Pokemon from '../components/Pokemon';

const FETCH_POKEMON_BY_ID = gql`
query FetchPokemonById($pokemonId: String!) {
  pokemon(id: $pokemonId) {
    id
    number
    name
    maxCP
    maxHP
    image
    types
    evolutions {
      id
      number
      name
      maxCP
      maxHP
      image
      types
    }
  }
}
`;

export default class Detail extends Component {
  render() {
    return (
      <Query query={FETCH_POKEMON_BY_ID} variables={{"pokemonId": this.props.match.params.campaignId}}>
        {({ data, loading }) => {
          if (loading || !data) {
            return <div className="col-md-12">Loading data</div>;
          }
          console.log(data);
          return (
            <div className="col-md-12">
              <Pokemon data={data.pokemon} hide-more-info={true}/>
              <Link to="/">Back to home</Link>
            </div>  
          );
        }}
      </Query>
    )
  }
}