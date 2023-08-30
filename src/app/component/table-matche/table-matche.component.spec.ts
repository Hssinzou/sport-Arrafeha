import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMatcheComponent } from './table-matche.component';

describe('TableMatcheComponent', () => {
  let component: TableMatcheComponent;
  let fixture: ComponentFixture<TableMatcheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMatcheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMatcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
