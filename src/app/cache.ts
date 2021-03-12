import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private map = new Map();

  addToMap(key:any, value:any){
    this.map.set(key, value);
  }

  mapContains(key:any):boolean{
    return this.map.has(key)
  }

  getFromMap(key:any){
    return this.map.get(key);
  }

  constructor() {     
    window.onbeforeunload = () => this.ngOnDestroy();   
  }
  ngOnInit(){ 
  }
  
  ngOnDestroy() {
    console.log("clearing cache")  
   this.map.clear;
  }
}
