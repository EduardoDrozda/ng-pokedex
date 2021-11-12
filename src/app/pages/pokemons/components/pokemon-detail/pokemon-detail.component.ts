import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AnimationUtils, PokemonUtils } from 'src/app/shared/utils';
import { IPokemonDetail, IStats } from '../../models';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  animations: [AnimationUtils.fadeAnimation()],
})
export class PokemonDetailComponent {
  @Input() pokemon!: IPokemonDetail;

  tabs = [
    { id: 'base_stats', name: 'Stats' }
  ];

  tabSelected = this.tabs[0].id;

  getPokemonImage() {
    return PokemonUtils.getPokemonImage(this.pokemon);
  }

  getPokemonName() {
    return PokemonUtils.getPokemonName(this.pokemon);
  }

  openTabSelected(tabId: string) {
    this.tabSelected = tabId;
  }

  getPokemonStatName(stats: IStats) {
    return PokemonUtils.getPokemonStatsName(stats);
  }

  formatStringName(name: string) {
    return name.replace('-', ' ');
  }
}
