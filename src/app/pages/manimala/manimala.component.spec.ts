import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManimalaComponent } from './manimala.component';

describe('ManimalaComponent', () => {
  let component: ManimalaComponent;
  let fixture: ComponentFixture<ManimalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManimalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManimalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
