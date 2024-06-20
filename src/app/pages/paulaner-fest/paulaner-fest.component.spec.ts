import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaulanerFestComponent } from './paulaner-fest.component';

describe('PaulanerFestComponent', () => {
  let component: PaulanerFestComponent;
  let fixture: ComponentFixture<PaulanerFestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaulanerFestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaulanerFestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
