import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorage: Storage;

  constructor() { 
    this.localStorage = window.localStorage;    
  }

  addArray(key:any, value:string[]){
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  addToPokemonArray(name:string){
    var pokeArr: string[] = JSON.parse(localStorage.getItem("pokemons")!); 
    pokeArr.push(name);
    localStorage.setItem("pokemons", JSON.stringify(pokeArr));
  }

  addUser(value:string){
    this.localStorage.setItem("trainer", value);
  }

  getUser(){
    return this.localStorage.getItem("trainer");
  }

  set(key:string, value:string){
    this.localStorage.setItem(key, value);
  }

  get(key:string){
    return this.localStorage.getItem(key);
  }

  containsPokemon(name:string){
    var pokeArr: string[] = JSON.parse(localStorage.getItem("pokemons")!);
    return pokeArr.includes(name);
  }

}
