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
    //call lifecycle hook on refresh to clear cache 
    //done so no extra cache builds up
    window.onbeforeunload = () => this.ngOnDestroy();   
  }
  ngOnInit(){     
  }
  
  //clear data from the map (cache)
  ngOnDestroy() {
    this.map.clear;
  }
}
