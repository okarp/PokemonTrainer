import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/interfaces';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
