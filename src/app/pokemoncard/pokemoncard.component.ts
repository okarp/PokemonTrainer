import { Component, OnInit } from '@angular/core';
import { Ability, Move, PokemonCard, Stat, Type} from 'src/interfaces';
import { PokemonapifetcherService } from '../pokemonapifetcher.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
  styleUrls: ['./pokemoncard.component.css']
})
export class PokemoncardComponent implements OnInit {

  name!: string;
  pic!: string;
  baseStats!: Stat[];
  types!: Type[];
  height!: number;
  weight!: number;
  abilities!: Ability[];
  baseExp!: number;
  moves!: Move[];
  type!: string;
    
  

  constructor(private apiFetcher: PokemonapifetcherService, private route: ActivatedRoute) { }


  ngOnInit() {    
      this.apiFetcher.fetchApi("https://pokeapi.co/api/v2/pokemon/" + this.route.snapshot.paramMap.get('id')).subscribe((data: PokemonCard)=>{
      console.log(data)
      this.name = data.name;
      this.pic = data.sprites.front_default;
      this.weight = data.weight;
      this.height = data.height;
      this.types = data.types;       
      this.baseStats = data.stats; 
      this.abilities = data.abilities;
      this.moves = data.moves;   
      this.baseExp = data.base_experience; 
    })  
  }
}
