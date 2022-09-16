import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenServicoComponent } from './orden-servico.component';

describe('OrdenServicoComponent', () => {
  let component: OrdenServicoComponent;
  let fixture: ComponentFixture<OrdenServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
