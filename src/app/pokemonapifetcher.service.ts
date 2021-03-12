import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { PokemonCatalogue, Pokemon } from 'src/interfaces';
import { CacheService } from './cache';


@Injectable({
  providedIn: 'root'
})

export class PokemonapifetcherService {  
  _pokemons:Observable<any> = new Observable;
  private allPokemons: string = "https://pokeapi.co/api/v2/pokemon?limit="
  private offSetString: string = "&offset="  

  public getAllPokemons(limit: number, offset: number): Observable<PokemonCatalogue>{ 
    if (this.cache.mapContains(this.allPokemons + limit + this.offSetString + offset)){
      console.log("cache hit")
      return this.cache.getFromMap(this.allPokemons + limit + this.offSetString + offset);

    }    
    try{
      var response = this.HTTP.get<PokemonCatalogue>(this.allPokemons + limit + this.offSetString + offset);
      this.cache.addToMap(this.allPokemons + limit + this.offSetString + offset, response);
      return response;  
    }catch (e){
      console.log(e);
      return e;
    }    
  }
  public fetchApi(apiUrl: string){ 
    if (this.cache.mapContains(apiUrl)){
      console.log("cached result");
      return this.cache.getFromMap(apiUrl);      
    } 
    try{ 
      var response = this.HTTP.get(apiUrl);
      this.cache.addToMap(apiUrl, response);
      return response;       
    }catch (e){
      console.log(e);
      return e;
    }
  }
  constructor(private readonly HTTP : HttpClient, private cache: CacheService) { 
    
  }
}

