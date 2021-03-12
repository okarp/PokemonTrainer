import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private map: Map<any,any>;

  add(key:any, value:any){
    this.map.set(key, value);
  }

  contains(key:any):boolean{
    return this.map.has(key)
  }

  get(key:any){
    return this.map.get(key);
  }

  constructor() {     
    this.map = new Map();
    window.onbeforeunload = () => this.ngOnDestroy();   
  }
  ngOnInit(){     
  }
  
  ngOnDestroy() {
    console.log("clearing cache")  
   this.map.clear;
  }
}
