import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachPlayerComponent } from './seach-player.component';

describe('SeachPlayerComponent', () => {
  let component: SeachPlayerComponent;
  let fixture: ComponentFixture<SeachPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeachPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeachPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
