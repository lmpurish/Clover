import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonBannerComponent } from './botton-banner.component';

describe('BottonBannerComponent', () => {
  let component: BottonBannerComponent;
  let fixture: ComponentFixture<BottonBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
