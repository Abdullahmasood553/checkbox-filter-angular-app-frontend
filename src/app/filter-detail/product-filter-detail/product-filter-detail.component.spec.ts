import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilterDetailComponent } from './product-filter-detail.component';

describe('ProductFilterDetailComponent', () => {
  let component: ProductFilterDetailComponent;
  let fixture: ComponentFixture<ProductFilterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFilterDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFilterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
