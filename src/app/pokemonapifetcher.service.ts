import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonCatalogue } from 'src/interfaces';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PokemonapifetcherService {  
  _pokemons:Observable<any> = new Observable;
  private allPokemons: string = "https://pokeapi.co/api/v2/pokemon?limit="

  public getAllPokemons(limit: number): Observable<PokemonCatalogue>{
      try{ 
      const response = this.HTTP.get<PokemonCatalogue>(this.allPokemons + limit);      
      return response;     
    }catch (e){
      console.log(e);
      return e;
    }
  }

  public fetchApi(apiUrl: string){  
    try{ 
      const response = this.HTTP.get(apiUrl);      
      return response;     
    }catch (e){
      console.log(e);
      return e;
    }
  }
  constructor(private readonly HTTP : HttpClient) { }
}

