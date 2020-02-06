import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcuctEditComponent } from './prodcuct-edit.component';

describe('ProdcuctEditComponent', () => {
  let component: ProdcuctEditComponent;
  let fixture: ComponentFixture<ProdcuctEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdcuctEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcuctEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
