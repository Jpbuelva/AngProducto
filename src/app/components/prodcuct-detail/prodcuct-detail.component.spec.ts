import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcuctDetailComponent } from './prodcuct-detail.component';

describe('ProdcuctDetailComponent', () => {
  let component: ProdcuctDetailComponent;
  let fixture: ComponentFixture<ProdcuctDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdcuctDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcuctDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
