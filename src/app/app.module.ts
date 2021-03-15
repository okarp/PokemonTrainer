import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { UserformComponent } from './userform/userform.component';
import { PokemontrainerComponent } from './components/pokemontrainer/pokemontrainer.component';
import { PokemoncatalougeComponent } from './components/pokemoncatalouge/pokemoncatalouge.component';
import { PokemoncardComponent } from './components/pokemoncard/pokemoncard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';  
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PokemonsComponent } from './components/pokemons/pokemons.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    UserformComponent,    
    PokemontrainerComponent,
    PokemoncatalougeComponent,
    PokemoncardComponent,
    AppheaderComponent,    
    PokemonsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatPaginatorModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
