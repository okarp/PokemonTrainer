import { Component, OnInit } from '@angular/core';
import { Pokemon} from 'src/interfaces';
import { PokemonapifetcherService } from '../pokemonapifetcher.service';
import { ActivatedRoute } from '@angular/router';



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


  constructor(private apiFetcher: PokemonapifetcherService, private route: ActivatedRoute) { }


  ngOnInit() {         
      this.apiFetcher.fetchApi(this.route.snapshot.paramMap.get('id')!).subscribe((data: Pokemon)=>{      
      this.pokemon = data;
      this.imageSource = this.pokemon.sprites.front_default; 
      this.imageSourceBack = this.pokemon.sprites.back_default;     
      this.loaded = true; 
      this.checkIsCaught();       
    })  
  }

  catchPokemon(){
    if (!this.alreadyCaught){
      var pokeArr: string[] = JSON.parse(localStorage.getItem("pokemons")!);    
      pokeArr.push(this.pokemon.name);    
      localStorage.setItem("pokemons", JSON.stringify(pokeArr));    
      this.imageSource = 'assets/images/pokeball.gif'
      this.caught = true;    
      setTimeout( ()=>{
        this.imageSource = this.pokemon.sprites.front_default;
        this.alreadyCaught = true;
        this.caught = false;
        }, 5000)      
    }
  }

  checkIsCaught(){
    var pokeArr: number[] = JSON.parse(localStorage.getItem("pokemons")!);
    if (pokeArr.includes(this.pokemon.id)){
      this.alreadyCaught = true;
    }
  }
}
