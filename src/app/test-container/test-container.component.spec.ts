import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestContainerComponent } from './test-container.component';

xdescribe('TestContainerComponent', () => {
  let component: TestContainerComponent;
  let fixture: ComponentFixture<TestContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
