import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapSearchboxComponent } from './ng-bootstrap-searchbox.component';

describe('NgBootstrapSearchboxComponent', () => {
  let component: NgBootstrapSearchboxComponent;
  let fixture: ComponentFixture<NgBootstrapSearchboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapSearchboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
