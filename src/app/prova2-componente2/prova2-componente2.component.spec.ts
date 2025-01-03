import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prova2Componente2Component } from './prova2-componente2.component';

describe('Prova2Componente2Component', () => {
  let component: Prova2Componente2Component;
  let fixture: ComponentFixture<Prova2Componente2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Prova2Componente2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prova2Componente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
