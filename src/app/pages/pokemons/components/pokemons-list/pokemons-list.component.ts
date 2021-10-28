import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IPagination } from 'src/app/shared/models';
import { PokemonUtils } from 'src/app/shared/utils';
import { IPokemonDetail } from '../../models';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
})
export class PokemonsListComponent implements OnInit, OnChanges {
  @Input() pokemons!: IPagination<IPokemonDetail>;
  @Output() pokemonSelectedEmiiter = new EventEmitter<IPokemonDetail>();
  @Output() getMorePokemonsEmitter = new EventEmitter<void>();

  pokemonSelected!: IPokemonDetail;
  isLoading = false;

  ngOnInit(): void {
    this.selectPokemon(this.pokemons.results[0]);
  }

  ngOnChanges(): void {
    this.isLoading = false;
  }

  getPokemonImage(pokemon: IPokemonDetail) {
    return PokemonUtils.getPokemonImage(pokemon);
  }

  getPokemonName(pokemon: IPokemonDetail) {
    return PokemonUtils.getPokemonName(pokemon);
  }

  selectPokemon(pokemon: IPokemonDetail) {
    this.pokemonSelected = pokemon;
    this.pokemonSelectedEmiiter.emit(this.pokemonSelected);
  }

  getMorePokemons() {
    this.getMorePokemonsEmitter.emit();
    this.isLoading = true;
  }
}
