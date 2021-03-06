# Pokemontrainer

The application uses the open [pokemon api](https://pokeapi.co) to fetch Pokemons and displays them to the user. The application is built using Angular.

A live version of this application is hosted in [Firebase](https://pokemontrainer-1ad78.web.app/catalouge).

## Usage

When opening the application for the first time you are asked to create a user (stored in your browsers local storage). 

After creating a user you can navigate between the Pokemon catalouge and Trainer page views.

Clicking a Pokemon in Pokemon catalouge or in Trainer page will display more information about the Pokemon. Clicking the image of the Pokemon in the detailed view will 'catch' it and add it to your Trainer collection.

### Running the application locally

Clone the repository followed by `npm install` to install the dependencies in the local node_modules folder.

After dependencies have been installed run `ng serve` for a dev server. 

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Building

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


### Pictures of the application

![catalouge](https://i.imgur.com/Anx4ItA.png)
![profile](https://i.imgur.com/Fegs6Sr.png)
![pokemoninfo](https://i.imgur.com/IVWBGrP.png)
