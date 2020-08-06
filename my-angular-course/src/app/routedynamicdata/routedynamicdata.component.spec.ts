import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutedynamicdataComponent } from './routedynamicdata.component';

describe('RoutedynamicdataComponent', () => {
  let component: RoutedynamicdataComponent;
  let fixture: ComponentFixture<RoutedynamicdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutedynamicdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutedynamicdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
