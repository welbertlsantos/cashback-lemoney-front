import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBackNewComponent } from './cash-back-new.component';

describe('CashBackNewComponent', () => {
  let component: CashBackNewComponent;
  let fixture: ComponentFixture<CashBackNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashBackNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashBackNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
