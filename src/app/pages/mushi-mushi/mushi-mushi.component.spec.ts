import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MushiMushiComponent } from './mushi-mushi.component';

describe('MushiMushiComponent', () => {
  let component: MushiMushiComponent;
  let fixture: ComponentFixture<MushiMushiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MushiMushiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MushiMushiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
