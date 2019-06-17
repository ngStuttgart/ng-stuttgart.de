import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBadgeComponent } from './ng-badge.component';

describe('NgBadgeComponent', () => {
  let component: NgBadgeComponent;
  let fixture: ComponentFixture<NgBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgBadgeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
