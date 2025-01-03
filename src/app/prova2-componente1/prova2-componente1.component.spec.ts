import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prova2Componente1Component } from './prova2-componente1.component';

describe('Prova2Componente1Component', () => {
  let component: Prova2Componente1Component;
  let fixture: ComponentFixture<Prova2Componente1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Prova2Componente1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prova2Componente1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
