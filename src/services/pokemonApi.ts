type PokemonResponse = {
  results: {
    name: string;
    url: string;
  }[];
};

export type PokemonDetailsResponse = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  species: {
    name: string;
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
};

export const fetchPokemons = async () => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=251&offset=$0`
    );
    const pokemon: PokemonResponse = await response.json();
    const pokemonRequests = pokemon.results.map(({ url }) => fetch(url));
    const pokemonResponses = await Promise.all(pokemonRequests);
    const pokemonDetails: PokemonDetailsResponse[] = await Promise.all(
      pokemonResponses.map((r) => r.json())
    );
    return pokemonDetails;
  } catch (err) {
    console.log("Error in Fetch: " + err);
    return [];
  }
};
