import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PokemoncardComponent } from './pokemoncard/pokemoncard.component';
import { PokemoncatalougeComponent } from './pokemoncatalouge/pokemoncatalouge.component';
import { PokemontrainerComponent } from './pokemontrainer/pokemontrainer.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: LandingpageComponent
  },
  {

  path: 'pokemon/:id',
  pathMatch: 'full',
  component: PokemoncardComponent
  },
  {
    path:'trainer',
    pathMatch: 'full',
    component: PokemontrainerComponent
  },
  {
    path:'catalouge',
    pathMatch: 'full',
    component: PokemoncatalougeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
