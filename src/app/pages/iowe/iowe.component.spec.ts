import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoweComponent } from './iowe.component';

describe('IoweComponent', () => {
  let component: IoweComponent;
  let fixture: ComponentFixture<IoweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
