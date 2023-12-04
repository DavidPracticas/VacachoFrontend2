import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdminsComponent } from './lista-admins.component';

describe('ListaAdminsComponent', () => {
  let component: ListaAdminsComponent;
  let fixture: ComponentFixture<ListaAdminsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAdminsComponent]
    });
    fixture = TestBed.createComponent(ListaAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
