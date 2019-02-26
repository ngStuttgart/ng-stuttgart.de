import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTileComponent } from './side-tile.component';

describe('SideTileComponent', () => {
  let component: SideTileComponent;
  let fixture: ComponentFixture<SideTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
