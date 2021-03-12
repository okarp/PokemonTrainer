import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonCatalogue, Result } from 'src/interfaces';
import { PokemonapifetcherService } from '../pokemonapifetcher.service';
import {MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-pokemoncatalouge',
  templateUrl: './pokemoncatalouge.component.html',
  styleUrls: ['./pokemoncatalouge.component.css']
})

export class PokemoncatalougeComponent implements OnInit {

  constructor(private apiFetcher: PokemonapifetcherService, private paginator: MatPaginatorIntl,
              private storage: StorageService) { }

  pokemonCatalouge : Result[] = [];
  pokemons: Pokemon[] = [];
  loading: boolean = true;
  private pokemonLimit: number = 10;
  private offset: number = 0;

  length = 898;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  handlePageEvent(event: PageEvent) {    
    this.length = event.length;    
    this.pageSize = event.pageSize;    
    this.pageIndex = event.pageIndex;
    this.offset = this.pageIndex * this.pageSize;
    this.pokemonLimit = this.pageSize;       
    this.getPokemons(this.pageSize, this.offset);
    this.storage.set("pagesize", this.pageSize.toString());
    this.storage.set("pageindex", this.pageIndex.toString());
    this.storage.set("offset", this.offset.toString());
  }


  ngOnInit() { 
    if (this.storage.get("pagesize") != null){
      let pagesize = this.storage.get("pagesize");
      let pageindex = this.storage.get("pageindex");
      let offset = this.storage.get("offset");  
      if (pagesize != null && pageindex != null && offset != null){        
        this.pageSize = parseInt(pagesize);
        this.offset = parseInt(offset);
        this.pageIndex = parseInt(pageindex);
        this.pokemonLimit = this.pageSize;
      }
    }

   this.getPokemons(this.pokemonLimit, this.offset);
   this.paginator.itemsPerPageLabel = "Pokemons per page"              
  }

  getSinglePokemon(url: string){    
    this.apiFetcher.fetchApi(url).subscribe((data: Pokemon)=>{      
    this.pokemons.push(data);    
    if (this.pokemons.length == this.pokemonLimit)
      this.loading = false;    
    })
  }


getPokemons(limit: number, offset:number){ 
  this.pokemonCatalouge = [];
  this.pokemons = [];
  this.loading = true;
  this.apiFetcher.getAllPokemons(limit, offset).subscribe((data: PokemonCatalogue)=>{           
      this.pokemonCatalouge = data.results;     
      this.pokemonCatalouge.forEach(element => {            
          this.getSinglePokemon(element.name);                                          
        })                  
      })                        
  }
}