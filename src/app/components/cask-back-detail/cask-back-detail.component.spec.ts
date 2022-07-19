import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaskBackDetailComponent } from './cask-back-detail.component';

describe('CaskBackDetailComponent', () => {
  let component: CaskBackDetailComponent;
  let fixture: ComponentFixture<CaskBackDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaskBackDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaskBackDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
