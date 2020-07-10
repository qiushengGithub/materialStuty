import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaystudyComponent } from './overlaystudy.component';

describe('OverlaystudyComponent', () => {
  let component: OverlaystudyComponent;
  let fixture: ComponentFixture<OverlaystudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlaystudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlaystudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
