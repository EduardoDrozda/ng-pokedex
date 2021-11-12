import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IPagination } from 'src/app/shared/models';
import { PokemonUtils } from 'src/app/shared/utils';
import { IPokemonDetail } from '../../models';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
})
export class PokemonsListComponent implements OnInit, OnChanges {
  @Input() pokemons!: IPagination<IPokemonDetail>;
  @Output() getPokemonSelected = new EventEmitter<IPokemonDetail>();
  @Output() getMorePokemon = new EventEmitter<void>();
  @Output() getPokemonByName = new EventEmitter<string>();

  form!: FormGroup;

  pokemonSelected!: IPokemonDetail;
  isLoading = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.selectPokemon(this.pokemons.results[0]);
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: [''],
    });

    this.form.valueChanges
      .pipe(debounceTime(700))
      .subscribe({
        next: () => {
          this.isLoading = true;
          this.getPokemonByName.emit(this.form.get('name')?.value)
        },
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectPokemon(this.pokemons.results[0]);
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
    this.getPokemonSelected.emit(this.pokemonSelected);
  }

  getMorePokemons() {
    this.getMorePokemon.emit();
    this.isLoading = true;
  }
}
