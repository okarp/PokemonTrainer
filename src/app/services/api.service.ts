import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Pokemon, PokemonInfo } from 'src/app/services/interfaces/interfaces';

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
  public getAllPokemons(limit: number, offset: number): Observable<PokemonInfo>{    
    try{
      return this.HTTP.get<PokemonInfo>(this.allPokemons + limit + this.offSetString + offset);        
    }catch (e){
      console.log("error");
      return e;
    }    
  }
  //get a single pokemon
  public getPokemon(pokemonName: string): Observable<Pokemon>{    
    try{ 
      return this.HTTP.get<Pokemon>(this.singlePokemon + pokemonName);     
    }catch (e){
      console.log("error");
      return e;
    }
  }
}

