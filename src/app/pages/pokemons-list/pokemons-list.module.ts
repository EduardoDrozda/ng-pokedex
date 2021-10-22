import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from './pokemons-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PokemonsListComponent,
  },
];

@NgModule({
  declarations: [PokemonsListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PokemonsListModule {}
