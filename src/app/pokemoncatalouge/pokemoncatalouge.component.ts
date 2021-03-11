import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonCatalogue } from 'src/interfaces';
import { PokemonapifetcherService } from '../pokemonapifetcher.service';

@Component({
  selector: 'app-pokemoncatalouge',
  templateUrl: './pokemoncatalouge.component.html',
  styleUrls: ['./pokemoncatalouge.component.css']
})

export class PokemoncatalougeComponent implements OnInit {

  constructor(private apiFetcher: PokemonapifetcherService) { }
  pokemonCatalouge : any[] = [];
  pokemons: Pokemon[] = [];
  loading: boolean = true;
  private pokemonLimit: number = 151;
  

  ngOnInit() { 
   this.getPokemons(this.pokemonLimit);          
  }

  getSinglePokemon(url: string){
    this.apiFetcher.fetchApi(url).subscribe((data: Pokemon)=>{      
    this.pokemons.push(data);
    if (this.pokemons.length > this.pokemonLimit * 0.9)
      this.loading = false;    
    })
  }


getPokemons(limit: number){  
  this.apiFetcher.getAllPokemons(limit).subscribe((data: PokemonCatalogue)=>{           
      this.pokemonCatalouge = data.results;     
      this.pokemonCatalouge.forEach(element => {            
          this.getSinglePokemon(element.url);                                          
        })                  
      })                        
  }
}