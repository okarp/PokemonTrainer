import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  public userName: string = ''; 
   
  handleFormSubmit(): void{    
    localStorage.setItem("trainer", this.userName);
    var pokeArr : string[] = []
    localStorage.setItem("pokemons", JSON.stringify(pokeArr));
    console.log(localStorage.getItem("trainer"));
    this.router.navigate(['catalouge'])
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("trainer") != null)
      this.router.navigate(['catalouge'])
  }

}
