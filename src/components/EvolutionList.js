import React, {Component} from 'react';
import Pokemon from './Pokemon';

export default class EvolutionList extends Component {
  render() {
    const {data} = this.props;
    if ( data && data.evolutions ) {
      return(
        <div>
          <h2>Pokemon evolutions</h2>
          {data.evolutions.map((evolution) => <Pokemon key={evolution.id} data={evolution} hide-more-info={true} extraClass="col-md-4" />)}
        </div>
      )   
    }
    return( "" )
  }
}
