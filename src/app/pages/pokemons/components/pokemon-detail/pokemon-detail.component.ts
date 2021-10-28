import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AnimationUtils, PokemonUtils } from 'src/app/shared/utils';
import { IPokemonDetail } from '../../models';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  animations: [AnimationUtils.fadeAnimation()]
})
export class PokemonDetailComponent {
  @Input() pokemon!: IPokemonDetail;

  getPokemonImage() {
    return PokemonUtils.getPokemonImage(this.pokemon);
  }

  getPokemonName() {
    return PokemonUtils.getPokemonName(this.pokemon);
  }
}
