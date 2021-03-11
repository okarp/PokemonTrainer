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

  constructor(private apiFetcher: PokemonapifetcherService, private route: ActivatedRoute) { }


  ngOnInit() {    
      this.apiFetcher.fetchApi("https://pokeapi.co/api/v2/pokemon/" + this.route.snapshot.paramMap.get('id')).subscribe((data: Pokemon)=>{      
      this.pokemon = data;      
      this.loaded = true;        
    })  
  }
}
