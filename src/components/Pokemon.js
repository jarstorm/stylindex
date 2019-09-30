import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import EvolutionList from './EvolutionList';

import './Pokemon.css';

export default class Pokemon extends Component {
  render() {
    const {data} = this.props;
    return(
      <div className={this.props.extraClass}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3>{data.name}<img className="pokemon-avatar" src={data.image}/></h3>  
          </div>
          <div className="panel-body">
            <p>Id: {data.id}</p>
            <p>Number: {data.number}</p>            
            <p>Max HP: {data.maxHP}</p>
            <p>Max CP: {data.maxCP}</p>
            <p>Types: {data.types}</p>
            <EvolutionList data={data} />
          </div>
        </div>
      </div> 
    )   
  }
}
