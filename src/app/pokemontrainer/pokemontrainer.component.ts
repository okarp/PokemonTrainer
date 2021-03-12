import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/interfaces';
import { PokemonapifetcherService } from '../pokemonapifetcher.service';

@Component({
  selector: 'app-pokemontrainer',
  templateUrl: './pokemontrainer.component.html',
  styleUrls: ['./pokemontrainer.component.css']
})
export class PokemontrainerComponent implements OnInit {

  pokemons: Pokemon[] = []
  trainerPokemons: string[] = []
  trainerName: string = ''

  constructor(private readonly apiFetcher: PokemonapifetcherService) { }

  ngOnInit(): void {
    this.trainerPokemons = JSON.parse(localStorage.getItem("pokemons")!);
    this.trainerName = localStorage.getItem("trainer")!;
    this.getPokemons();
  }

  getPokemons(){
    this.trainerPokemons.forEach(element => {
      this.apiFetcher.fetchApi(element).subscribe((data: Pokemon)=>{      
        this.pokemons.push(data);        
        })
      });
  }    
}
