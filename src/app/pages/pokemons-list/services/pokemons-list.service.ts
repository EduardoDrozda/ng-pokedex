import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsListService {

  private url = 'pokemon';

  constructor(private httpClient: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
