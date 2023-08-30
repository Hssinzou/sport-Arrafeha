import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStadiumComponent } from './table-stadium.component';

describe('TableStadiumComponent', () => {
  let component: TableStadiumComponent;
  let fixture: ComponentFixture<TableStadiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStadiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
