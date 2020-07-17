import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightHomeComponent } from './search-flight-home.component';

describe('SearchFlightHomeComponent', () => {
  let component: SearchFlightHomeComponent;
  let fixture: ComponentFixture<SearchFlightHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFlightHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
