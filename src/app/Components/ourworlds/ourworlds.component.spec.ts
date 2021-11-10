import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurworldsComponent } from './ourworlds.component';

describe('OurworldsComponent', () => {
  let component: OurworldsComponent;
  let fixture: ComponentFixture<OurworldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurworldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurworldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
