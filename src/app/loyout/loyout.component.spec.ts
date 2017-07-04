import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyoutComponent } from './loyout.component';

describe('LoyoutComponent', () => {
  let component: LoyoutComponent;
  let fixture: ComponentFixture<LoyoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
