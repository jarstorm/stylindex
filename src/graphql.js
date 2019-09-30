import gql from 'graphql-tag';

export const FETCH_POKEMONS = gql`
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

export const FETCH_POKEMON_BY_ID = gql`
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