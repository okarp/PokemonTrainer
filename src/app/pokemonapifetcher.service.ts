import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { PokemonCatalogue } from 'src/interfaces';


@Injectable({
  providedIn: 'root'
})

export class PokemonapifetcherService {  
  _pokemons:Observable<any> = new Observable;
  private allPokemons: string = "https://pokeapi.co/api/v2/pokemon?limit="
  private offSetString: string = "&offset="
 

  public getAllPokemons(limit: number, offset: number): Observable<PokemonCatalogue>{     
    try{
      return this.HTTP.get<PokemonCatalogue>(this.allPokemons + limit + this.offSetString + offset);   
    }catch (e){
      console.log(e);
      return e;
    }    
  }
  public fetchApi(apiUrl: string){  
    try{ 
      return this.HTTP.get(apiUrl);       
    }catch (e){
      console.log(e);
      return e;
    }
  }
  constructor(private readonly HTTP : HttpClient) {}
}

