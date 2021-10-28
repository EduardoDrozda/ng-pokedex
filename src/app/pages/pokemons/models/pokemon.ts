export interface IPokemonList {
  name: string;
  url: string;
}

export interface IPokemonDetail {
  id: number;
  name: string;
  sprites: ISprite;
}

export interface ISprite {
  front_default: string;
  other: {
    'official-artwork': { front_default: string };
  };
}
