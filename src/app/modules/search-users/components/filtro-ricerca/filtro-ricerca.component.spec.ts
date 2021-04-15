import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroRicercaComponent } from './filtro-ricerca.component';

describe('FiltroRicercaComponent', () => {
  let component: FiltroRicercaComponent;
  let fixture: ComponentFixture<FiltroRicercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroRicercaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroRicercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
