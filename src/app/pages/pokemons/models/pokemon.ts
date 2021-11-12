export interface IPokemonList {
  name: string;
  url: string;
}

export interface IPokemonDetail {
  id: number;
  name: string;
  stats: IStats[];
  moves: IMoves[];
  sprites: ISprite;
}

export interface IStats {
  base_stat: number;
  effort: number;
  stat: IStat;
}

interface IStat {
  name: string;
}

export interface IMoves {
  move: IMove;
}

interface IMove {
  name: string;
}

export interface ISprite {
  front_default: string;
  other: {
    'official-artwork': { front_default: string };
  };
}
