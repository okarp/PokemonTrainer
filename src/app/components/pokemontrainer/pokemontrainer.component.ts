import { Component, OnInit } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';
import { Pokemon } from 'src/app/services/interfaces/interfaces';
import { ApiService} from '../../services/api.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-pokemontrainer',
  templateUrl: './pokemontrainer.component.html',
  styleUrls: ['./pokemontrainer.component.css']
})
export class PokemontrainerComponent implements OnInit {

  
  pokemons: Pokemon[] = []
  trainerPokemons: string[] = []
  trainerName: string = ''
  loading: boolean = true;
  fetchedPokemons: number = 0;
  hasPokemons: boolean = false;

  constructor(private readonly apiFetcher: ApiService, private readonly storage: StorageService) { }

  //on init get trainers name and collected pokemons
  ngOnInit(): void {
    this.trainerPokemons = this.storage.getPokemons();
    this.trainerName = this.storage.getUser();    
    this.loading = this.hasPokemons = this.trainerPokemons.length > 0;
    console.log(this.loading)
    console.log(this.hasPokemons)
    this.getPokemons();    
  }
  //request data for the collected pokemons
  getPokemons(){
    this.trainerPokemons.forEach(element => {
      this.apiFetcher.getPokemon(element).pipe(
        finalize(() =>{                   
          this.fetchedPokemons += 1;
          if (this.fetchedPokemons === this.trainerPokemons.length){            
            this.loading = false;            
          }
          
      }),catchError(err =>{
        this.fetchedPokemons += 1;
        throw err;
      })
      ).
      subscribe((data: Pokemon)=>{      
        this.pokemons.push(data);        
        })
      });
  }    
}
