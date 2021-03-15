import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Pokemon, PokemonCatalogue } from 'src/app/services/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class ApiService {  
  
  private allPokemons: string = "https://pokeapi.co/api/v2/pokemon?limit="
  private offSetString: string = "&offset=" 
  private singlePokemon: string =  "https://pokeapi.co/api/v2/pokemon/"

  constructor(private readonly HTTP : HttpClient) { 
    
  }

  //get all pokemons (or rather link to every pokemon) with limit and offset
  public getAllPokemons(limit: number, offset: number): Observable<PokemonCatalogue>{   
   
    try{
      return this.HTTP.get<PokemonCatalogue>(this.allPokemons + limit + this.offSetString + offset);        
    }catch (e){
      console.log(e);
      return e;
    }    
  }
  //get a single pokemon, first check cache
  public getPokemon(pokemonName: string): Observable<Pokemon>{  
    //if no cache hit, fetch the pokemon data and store it in cache for future requests
    try{ 
      return this.HTTP.get<Pokemon>(this.singlePokemon + pokemonName);     
    }catch (e){
      console.log(e);
      return e;
    }
  }

}

