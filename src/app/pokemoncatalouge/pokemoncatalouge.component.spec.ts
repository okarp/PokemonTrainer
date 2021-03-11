import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemoncatalougeComponent } from './pokemoncatalouge.component';

describe('PokemoncatalougeComponent', () => {
  let component: PokemoncatalougeComponent;
  let fixture: ComponentFixture<PokemoncatalougeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemoncatalougeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemoncatalougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
