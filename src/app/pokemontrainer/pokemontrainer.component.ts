import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/interfaces';
import { ApiService} from '../services/api.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-pokemontrainer',
  templateUrl: './pokemontrainer.component.html',
  styleUrls: ['./pokemontrainer.component.css']
})
export class PokemontrainerComponent implements OnInit {

  
  pokemons: Pokemon[] = []
  private trainerPokemons: string[] = []
  trainerName: string = ''

  constructor(private readonly apiFetcher: ApiService, private readonly storage: StorageService) { }

  //on init get trainers name and collected pokemons
  ngOnInit(): void {
    this.trainerPokemons = this.storage.getPokemons();
    this.trainerName = this.storage.getUser();
    this.getPokemons();
  }
  //request data for the collected pokemons
  getPokemons(){
    this.trainerPokemons.forEach(element => {
      this.apiFetcher.getPokemon(element).subscribe((data: Pokemon)=>{      
        this.pokemons.push(data);        
        })
      });
  }    
}
