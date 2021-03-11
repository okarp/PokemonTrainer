import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemontrainerComponent } from './pokemontrainer.component';

describe('PokemontrainerComponent', () => {
  let component: PokemontrainerComponent;
  let fixture: ComponentFixture<PokemontrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemontrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemontrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
