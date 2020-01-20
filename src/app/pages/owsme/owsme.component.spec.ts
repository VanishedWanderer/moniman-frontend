import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwsmeComponent } from './owsme.component';

describe('OwsmeComponent', () => {
  let component: OwsmeComponent;
  let fixture: ComponentFixture<OwsmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwsmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwsmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
