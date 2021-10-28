import { IPokemonDetail } from "src/app/pages/pokemons/models";

export abstract class PokemonUtils {
  static getPokemonImage(pokemon: IPokemonDetail) {
    return pokemon.sprites.other["official-artwork"].front_default;
  }

  static getPokemonName(pokemon: IPokemonDetail) {
    return `#${pokemon.id} ${pokemon.name}`;
  }
}
