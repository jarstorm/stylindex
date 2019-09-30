import React, {Component} from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom'

import Pokemon from '../components/Pokemon';

import { FETCH_POKEMON_BY_ID } from '../graphql.js';

export default class Detail extends Component {
  render() {
    return (
      <Query query={FETCH_POKEMON_BY_ID} variables={{"pokemonId": this.props.match.params.id}}>
        {({ data, loading }) => {
          if (loading || !data) {
            return <div className="col-md-12">Loading data</div>;
          }
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