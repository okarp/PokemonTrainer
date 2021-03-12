import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Pokemon, PokemonCatalogue } from 'src/interfaces';
import { CacheService } from './cache';


@Injectable({
  providedIn: 'root'
})

export class ApiService {  
  
  private allPokemons: string = "https://pokeapi.co/api/v2/pokemon?limit="
  private offSetString: string = "&offset=" 
  private singlePokemon: string =  "https://pokeapi.co/api/v2/pokemon/"

  //injects cache service
  constructor(private readonly HTTP : HttpClient, private cache: CacheService) { 
    
  }

  //get all pokemons (or rather link to every pokemon)
  //with limit and offset, cache the results in cacheservice to reduce load on API
  public getAllPokemons(limit: number, offset: number): Observable<PokemonCatalogue>{ 
    //if the result is already in cache then return it
    if (this.cache.contains(this.allPokemons + limit + this.offSetString + offset)){
      console.log("cache hit")
      return this.cache.get(this.allPokemons + limit + this.offSetString + offset);
    }    
    //if no cache hit, fetch the result from API and store in cache
    try{
      var response = this.HTTP.get<PokemonCatalogue>(this.allPokemons + limit + this.offSetString + offset);
      this.cache.add(this.allPokemons + limit + this.offSetString + offset, response);
      return response;  
    }catch (e){
      console.log(e);
      return e;
    }    
  }
  //get a single pokemon, first check cache
  public getPokemon(pokemonName: string): Observable<Pokemon>{ 
    if (this.cache.contains(this.singlePokemon + pokemonName)){
      console.log("cached result");
      return this.cache.get(this.singlePokemon + pokemonName);      
    } 
    //if no cache hit, fetch the pokemon data and store it in cache for future requests
    try{ 
      var response = this.HTTP.get<Pokemon>(this.singlePokemon + pokemonName);
      this.cache.add(this.singlePokemon + pokemonName, response);
      return response;       
    }catch (e){
      console.log(e);
      return e;
    }
  }

}

