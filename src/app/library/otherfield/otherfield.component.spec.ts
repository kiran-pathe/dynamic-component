import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherfieldComponent } from './otherfield.component';

describe('OtherfieldComponent', () => {
  let component: OtherfieldComponent;
  let fixture: ComponentFixture<OtherfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
