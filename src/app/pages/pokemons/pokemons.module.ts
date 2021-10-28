import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './pokemons.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { InfiniteScrollDirective } from 'src/app/shared/directives/infinite-scroll/infinite-scroll.directive';

const routes: Routes = [
  {
    path: '',
    component: PokemonsComponent,
  },
];

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonDetailComponent,
    PokemonsListComponent,
    LoaderComponent,
    InfiniteScrollDirective
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PokemonsModule {}
