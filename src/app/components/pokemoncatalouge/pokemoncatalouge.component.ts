import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonInfo, Result } from 'src/app/services/interfaces/interfaces';
import { ApiService } from '../../services/api.service';
import {MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import { StorageService } from '../../services/storage.service';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-pokemoncatalouge',
  templateUrl: './pokemoncatalouge.component.html',
  styleUrls: ['./pokemoncatalouge.component.css']
})

export class PokemoncatalougeComponent implements OnInit {

  constructor(private apiFetcher: ApiService, private paginator: MatPaginatorIntl,
              private storage: StorageService) { }

  
  pokemonResults : Result[] = [];
  pokemons: Pokemon[] = [];
  loading: boolean = true;
  private pokemonLimit: number = 10;
  private offset: number = 0;
  private queryLength = 0;

  //values for the paginator
  length = 802;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  //handling paginator event
  handlePageEvent(event: PageEvent) {    
    this.length = event.length;    
    this.pageSize = event.pageSize;    
    this.pageIndex = event.pageIndex;
    //calculate offset for api call
    this.offset = this.pageIndex * this.pageSize;
    this.pokemonLimit = this.pageSize;       
    this.getPokemons(this.pageSize, this.offset);
    this.storage.set("pagesize", this.pageSize.toString());
    this.storage.set("pageindex", this.pageIndex.toString());
    this.storage.set("offset", this.offset.toString());
  }

  //check on init the previous state of paginator and set it as current state
  //so user returns on the same state of the component when navigating
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

  //get all pokemons
  getPokemons(limit: number, offset:number){ 
    this.loading = true; 
    this.pokemonResults = [];
    this.pokemons = [];       
    this.apiFetcher.getAllPokemons(limit, offset)
    .pipe( 
      finalize(() => {
        //when query has finished set queryLenght as the amount of pokemons fetched
        this.pokemonResults.forEach(element => {            
          this.getSinglePokemon(element.name);
          this.queryLength = this.pokemonResults.length;                                          
        })           
      }))
    .subscribe((data: PokemonInfo)=>{           
        this.pokemonResults = data.results;                          
       })                 
    }

  //get a single pokemon from api and push it to pokemons array
  //change loading to false when all pokemons have been fetched
  getSinglePokemon(url: string){       
    this.apiFetcher.getPokemon(url)
    .pipe(
      finalize(() => {        
        if (this.pokemons.length == this.queryLength)
          this.loading = false; 
          //if an error occurs in the get, remove one from queryLength
          //so loading boolean gets flagged correctly when every pokemon has been fetched         
       }),catchError(err =>{
         this.queryLength -= 1;
         throw err;
       })        
       ).subscribe((data: Pokemon)=>{                  
        this.pokemons.push(data);   
    })    
  }
}