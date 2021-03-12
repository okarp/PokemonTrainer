import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  public userName: string = ''; 
   
  //add user to storage and redirect to pokemon catalouge
  handleFormSubmit(): void{    
    this.storage.addUser(this.userName);
    var pokeArr : string[] = []
    this.storage.addArray("pokemons", pokeArr);
    this.router.navigate(['catalouge'])
  };

  constructor(private router: Router, private storage: StorageService) { }
  //on init check if a user has been created, redirect if yes.
  ngOnInit(): void {
    if (this.storage.getUser()!= null)
      this.router.navigate(['catalouge'])
  }
}
