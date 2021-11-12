import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagination } from 'src/app/shared/models';
import { IPokemonDetail, IPokemonList } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private uri = 'pokemon';

  constructor(private httpClient: HttpClient) {}

  getPokemons(
    offset: number,
    limit: number
  ): Observable<IPagination<IPokemonList>> {
    const uri = `${this.uri}?offset=${offset}&limit=${limit}`;

    return this.httpClient.get<IPagination<IPokemonList>>(uri);
  }

  getPokemonByUrl(url: string): Observable<IPokemonDetail> {
    return this.httpClient.get<IPokemonDetail>(url);
  }

  getPokemonByName(name: string): Observable<IPokemonDetail> {
    const uri = `${this.uri}/${name}`;
    return this.httpClient.get<IPokemonDetail>(uri);
  }
}
