import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailemosComponent } from './bailemos.component';

describe('BailemosComponent', () => {
  let component: BailemosComponent;
  let fixture: ComponentFixture<BailemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BailemosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BailemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
