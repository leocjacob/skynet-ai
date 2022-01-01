import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KannimalaComponent } from './kannimala.component';

describe('KannimalaComponent', () => {
  let component: KannimalaComponent;
  let fixture: ComponentFixture<KannimalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KannimalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KannimalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
