import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAppleComponent } from './open-apple.component';

describe('OpenAppleComponent', () => {
  let component: OpenAppleComponent;
  let fixture: ComponentFixture<OpenAppleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenAppleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenAppleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
