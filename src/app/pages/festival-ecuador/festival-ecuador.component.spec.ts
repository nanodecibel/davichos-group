import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalEcuadorComponent } from './festival-ecuador.component';

describe('FestivalEcuadorComponent', () => {
  let component: FestivalEcuadorComponent;
  let fixture: ComponentFixture<FestivalEcuadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FestivalEcuadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FestivalEcuadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
