import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunChildComponent } from './fun-child.component';

describe('FunChildComponent', () => {
  let component: FunChildComponent;
  let fixture: ComponentFixture<FunChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
