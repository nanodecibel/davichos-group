import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmcLiveComponent } from './omc-live.component';

describe('OmcLiveComponent', () => {
  let component: OmcLiveComponent;
  let fixture: ComponentFixture<OmcLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OmcLiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OmcLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
