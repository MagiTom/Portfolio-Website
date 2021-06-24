import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumsLayoutComponent } from './two-colums-layout.component';

describe('TwoColumsLayoutComponent', () => {
  let component: TwoColumsLayoutComponent;
  let fixture: ComponentFixture<TwoColumsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
