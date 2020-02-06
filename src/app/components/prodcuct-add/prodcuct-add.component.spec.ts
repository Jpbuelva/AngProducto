import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcuctAddComponent } from './prodcuct-add.component';

describe('ProdcuctAddComponent', () => {
  let component: ProdcuctAddComponent;
  let fixture: ComponentFixture<ProdcuctAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdcuctAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcuctAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
