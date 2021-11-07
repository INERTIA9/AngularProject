import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutdlcComponent } from './aboutdlc.component';

describe('AboutdlcComponent', () => {
  let component: AboutdlcComponent;
  let fixture: ComponentFixture<AboutdlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutdlcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutdlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
