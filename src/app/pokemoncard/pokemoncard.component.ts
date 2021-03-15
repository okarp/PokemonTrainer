import { Component, OnInit } from '@angular/core';
import { Pokemon} from 'src/app/interfaces/interfaces';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/storage.service';



@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
  styleUrls: ['./pokemoncard.component.css']
})
export class PokemoncardComponent implements OnInit {

  pokemon!: Pokemon;
  loaded : boolean = false; 
  imageSource!: string;
  imageSourceBack!: string;
  alreadyCaught: boolean = false;
  caught: boolean = false;


  constructor(private apiFetcher: ApiService, private route: ActivatedRoute,
              private storage: StorageService) { }

  //on init get the route parameter and fetch the corresponding pokemon from api  
  ngOnInit() {         
      this.apiFetcher.getPokemon(this.route.snapshot.paramMap.get('id')!).subscribe((data: Pokemon)=>{      
      this.pokemon = data;
      this.imageSource = this.pokemon.sprites.front_default; 
      this.imageSourceBack = this.pokemon.sprites.back_default;     
      this.loaded = true; 
      //check if trainer has caught the pokemon already
      this.checkIsCaught();       
    })  
  }
  
  //handles the click of pokemons image to 'catch it'
  catchPokemon(){
    //check if pokemon has been collected already
    if (!this.alreadyCaught){
      this.storage.addToPokemonArray(this.pokemon.name) 
      //show the pokeball gif for 5 seconds   
      this.imageSource = 'assets/images/pokeball.gif'
      this.caught = true;    
      setTimeout( ()=>{
        //set image back from pokeball gift to pokemon after 5 seconds
        this.imageSource = this.pokemon.sprites.front_default;
        this.alreadyCaught = true;
        this.caught = false;
        }, 5000)      
    }
  }

  //returns true if pokemon has been caught by the trainer
  checkIsCaught(){
      this.alreadyCaught = this.storage.containsPokemon(this.pokemon.name);    
  }
}
