import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoudcomponentComponent } from './notfoudcomponent.component';

describe('NotfoudcomponentComponent', () => {
  let component: NotfoudcomponentComponent;
  let fixture: ComponentFixture<NotfoudcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfoudcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoudcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
