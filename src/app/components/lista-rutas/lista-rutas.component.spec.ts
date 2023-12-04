import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRutasComponent } from './lista-rutas.component';

describe('ListaRutasComponent', () => {
  let component: ListaRutasComponent;
  let fixture: ComponentFixture<ListaRutasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaRutasComponent]
    });
    fixture = TestBed.createComponent(ListaRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
