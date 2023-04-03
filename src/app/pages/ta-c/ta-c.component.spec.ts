import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaCComponent } from './ta-c.component';

describe('TaCComponent', () => {
  let component: TaCComponent;
  let fixture: ComponentFixture<TaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
