import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MundakayamComponent } from './mundakayam.component';

describe('MundakayamComponent', () => {
  let component: MundakayamComponent;
  let fixture: ComponentFixture<MundakayamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MundakayamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MundakayamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
