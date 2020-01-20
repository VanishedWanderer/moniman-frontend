import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtPageComponent } from './debt-page.component';

describe('DebtComponent', () => {
  let component: DebtPageComponent;
  let fixture: ComponentFixture<DebtPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
