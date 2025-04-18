import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunComponent } from './fun.component';

describe('FunComponent', () => {
  let component: FunComponent;
  let fixture: ComponentFixture<FunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
