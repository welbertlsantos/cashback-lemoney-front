import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBackListComponent } from './cash-back-list.component';

describe('CashBackListComponent', () => {
  let component: CashBackListComponent;
  let fixture: ComponentFixture<CashBackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashBackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashBackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
