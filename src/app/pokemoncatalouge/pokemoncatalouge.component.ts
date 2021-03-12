import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonCatalogue, Result } from 'src/interfaces';
import { PokemonapifetcherService } from '../pokemonapifetcher.service';
import {MatPaginatorIntl, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-pokemoncatalouge',
  templateUrl: './pokemoncatalouge.component.html',
  styleUrls: ['./pokemoncatalouge.component.css']
})

export class PokemoncatalougeComponent implements OnInit {

  constructor(private apiFetcher: PokemonapifetcherService, private paginator: MatPaginatorIntl) { }
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
    localStorage.setItem("pagesize", this.pageSize.toString());
    localStorage.setItem("pageindex", this.pageIndex.toString());
    localStorage.setItem("offset", this.offset.toString());
  }


  ngOnInit() { 
    if (localStorage.getItem("pagesize") != null){
      let pagesize = localStorage.getItem("pagesize");
      let pageindex = localStorage.getItem("pageindex");
      let offset = localStorage.getItem("offset");
      if (pagesize != null && pageindex != null && offset != null){
        console.log(pagesize)
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