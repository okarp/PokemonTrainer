import { Component, OnInit } from '@angular/core';
import { PokemonCard, PokemonCatalogue } from 'src/interfaces';
import { PokemonapifetcherService } from '../pokemonapifetcher.service';

@Component({
  selector: 'app-pokemoncatalouge',
  templateUrl: './pokemoncatalouge.component.html',
  styleUrls: ['./pokemoncatalouge.component.css']
})

export class PokemoncatalougeComponent implements OnInit {

  constructor(private apiFetcher: PokemonapifetcherService) { }
  pokemons : any[] = [];
  pokemonCards: PokemonCard[] = [];
  loading: boolean = false;
  private pokemonLimit: number = 250;
  

  ngOnInit() { 
   this.getPokemons(this.pokemonLimit);          
  }

  getSinglePokemon(url: string){
    this.apiFetcher.fetchApi(url).subscribe((data: PokemonCard)=>{      
    this.pokemonCards.push(data);     
    })
  }


getPokemons(limit: number){  
  this.apiFetcher.getAllPokemons(limit).subscribe((data: PokemonCatalogue)=>{      
      this.pokemons = data.results;     
      this.pokemons.forEach(element => {            
          this.getSinglePokemon(element.url);                                          
        })                  
      })                    
    }
    
    pokemonNotFoundHandler(reduce: number) {      
      console.log(reduce);
    }
  } 

