import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemons',
    pathMatch: 'full',
  },
  {
    path: 'pokemons',
    loadChildren: () =>
      import('./pages/pokemons/pokemons.module').then((m) => m.PokemonsModule),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
