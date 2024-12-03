import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SjmSideMenuComponent } from './sjm-side-menu.component';

describe('SjmSideMenuComponent', () => {
  let component: SjmSideMenuComponent;
  let fixture: ComponentFixture<SjmSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SjmSideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SjmSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
