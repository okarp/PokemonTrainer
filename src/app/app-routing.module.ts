import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NotfoudcomponentComponent } from './components/notfound/notfoudcomponent/notfoudcomponent.component';
import { PokemoncardComponent } from './components/pokemoncard/pokemoncard.component';
import { PokemoncatalougeComponent } from './components/pokemoncatalouge/pokemoncatalouge.component';
import { PokemontrainerComponent } from './components/pokemontrainer/pokemontrainer.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: LandingpageComponent
  },
  {

  path: 'pokemon/:id',
  pathMatch: 'full',
  component: PokemoncardComponent,
  canActivate: [AuthGuard]
  },
  {
    path:'trainer',    
    component: PokemontrainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'catalouge',    
    component: PokemoncatalougeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotfoudcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
