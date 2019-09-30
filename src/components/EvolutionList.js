import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Pokemon from './Pokemon';

export default class EvolutionList extends Component {
  render() {
    const {data} = this.props;
    console.log(data);
    if ( data && data.evolutions ) {
    return(
      <div>
        <h2>Pokemon evolutions</h2>
        {data.evolutions.map((evolution) => <Pokemon key={evolution.id} data={evolution} hide-more-info={true} extraClass="col-md-4" />)}
      </div>
    )   
  }
  return( <div></div> )
  }
}
