import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopaIndiumComponent } from './copa-indium.component';

describe('CopaIndiumComponent', () => {
  let component: CopaIndiumComponent;
  let fixture: ComponentFixture<CopaIndiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CopaIndiumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopaIndiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
