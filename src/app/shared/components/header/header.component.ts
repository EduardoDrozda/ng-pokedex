import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headers = [
    { name: 'Pokêmons', path: 'pokemons' },
    // { name: 'Berries', path: 'berries' },
    // { name: 'Games', path: 'games' },
  ];

  path = 'pokemons';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goTo(path: string) {
    this.path = path;
    this.router.navigate([path]);
  }
}
