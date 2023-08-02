export type Pokemon = {
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
