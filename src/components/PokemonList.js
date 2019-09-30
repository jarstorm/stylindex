import React, {Component} from 'react';
import Pokemon from './Pokemon';
import { Link } from 'react-router-dom'

import './PokemonList.css';

export default class PokemonList extends Component {
	render() {
		return (
	    	<div className="col-md-12">
				{this.props.list.map((pokemonData) => 
					<div className="col-md-3 pokemon-detail">
						<Pokemon key={pokemonData.id} data={pokemonData} />
						<Link to={"/detail/" + pokemonData.id} className="more-info-link">+More Info</Link>
					</div>	
				)}
	    	</div>
	    ) 
  	}
}