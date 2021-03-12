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
  imageSource: string = '';
  caught: boolean = false;

  constructor(private apiFetcher: PokemonapifetcherService, private route: ActivatedRoute) { }


  ngOnInit() {         
      this.apiFetcher.fetchApi(this.route.snapshot.paramMap.get('id')!).subscribe((data: Pokemon)=>{      
      this.pokemon = data;
      this.imageSource = this.pokemon.sprites.front_default;      
      this.loaded = true;        
    })  
  }

  catchPokemon(){
    console.log("catch")
    this.imageSource = 'assets/images/pokeball.gif'
    this.caught = true;
    setTimeout( ()=>{
      this.imageSource = this.pokemon.sprites.front_default;
      }, 5000)
  }
}
