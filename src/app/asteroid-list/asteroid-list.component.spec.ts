import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidListComponent } from './asteroid-list.component';

describe('AsteroidListComponent', () => {
  let component: AsteroidListComponent;
  let fixture: ComponentFixture<AsteroidListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsteroidListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
