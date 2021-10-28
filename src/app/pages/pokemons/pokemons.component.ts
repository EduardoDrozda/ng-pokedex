import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPagination } from 'src/app/shared/models';
import { SubSink } from 'subsink';
import { IPokemonDetail, IPokemonList } from './models';
import { PokemonsService } from './services/pokemons.service';

import { finalize, map, mergeMap, tap, toArray } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnDestroy, OnInit {
  private subs = new SubSink();

  pokemons!: IPagination<IPokemonDetail>;
  pokemonsDetail: IPokemonDetail[] = [];

  isLoading = true;

  offset = 0;
  limit = 10;

  constructor(private pokemonService: PokemonsService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private getPokemons() {
    this.pokemonService
      .getPokemons(this.offset, this.limit)
      .toPromise()
      .then(async (res) => {
        this.pokemons = { ...res, results: [
          ...this.pokemonsDetail
        ] };
        const { results } = res;
        await this.getPokemonsDetail(results);
      })
      .finally(() => (this.isLoading = false));
  }

  private async getPokemonsDetail(results: IPokemonList[]) {
    for (const { url } of results) {
      const pokemonsDetail = await this.getPokemonByUrl(url);
      this.pokemonsDetail.push(pokemonsDetail);
      this.pokemons.results.push(pokemonsDetail);
    }
  }

  private async getPokemonByUrl(url: string) {
    return this.pokemonService.getPokemonByUrl(url).toPromise();
  }

  getMorePokemons() {
    this.offset = this.offset + this.limit;
    this.getPokemons();
  }
}
