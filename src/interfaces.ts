
   export interface Ability2 {
    name: string;
    url: string;
}

export interface Ability {
    ability: Ability2;
    is_hidden: boolean;
    slot: number;
}

export interface Form {
    name: string;
    url: string;
}

export interface Move2 {
    name: string;
    url: string;
}


export interface Move {
    move: Move2;    
}

export interface Species {
    name: string;
    url: string;
}

export interface DreamWorld {
    front_default?: any;
    front_female?: any;
}

export interface OfficialArtwork {
    front_default: string;
}

export interface Other {
    dream_world: DreamWorld;
   
}


export interface Sprites {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
    other: Other;    
}

export interface Stat2 {
    name: string;
    url: string;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: Stat2;
}

export interface Type2 {
    name: string;
    url: string;
}

export interface Type {
    slot: number;
    type: Type2;
}

export interface PokemonCard {
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    game_indices: any[];
    height: number;
    id: number;
    is_default: boolean;    
    moves: Move[];
    name: string;
    order: number;
    past_types: any[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}

export interface Result {
    name: string;
    url: string;
}

export interface PokemonCatalogue {
    count: number;
    next: string;
    previous: string;
    results: Result[];
}


