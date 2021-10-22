import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PokemonsListService } from './services/pokemons-list.service';

import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
})
export class PokemonsListComponent implements OnDestroy, OnInit {
  private ngUnsubscribe = new Subject();

  constructor(private pokemonListService: PokemonsListService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private getPokemons() {
    this.pokemonListService
      .getPokemons()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (res) => console.log(res),
      });
  }
}
