import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewskersComponent } from './brewskers.component';

describe('BrewskersComponent', () => {
  let component: BrewskersComponent;
  let fixture: ComponentFixture<BrewskersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewskersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewskersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
