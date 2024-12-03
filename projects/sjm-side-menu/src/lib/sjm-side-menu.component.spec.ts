import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SjmSideMenuComponent } from './sjm-side-menu.component';
import { provideRouter } from '@angular/router';

describe('SjmSideMenuComponent', () => {
  let component: SjmSideMenuComponent;
  let fixture: ComponentFixture<SjmSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SjmSideMenuComponent,],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SjmSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSignIn when button is clicked', () => {
    
    spyOn(component.onSignIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);

    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('[data-login]') as HTMLButtonElement;

    button.click();

    expect(component.onSignIn.emit).toHaveBeenCalled();

  })

  it('should call onSignOut when button is clicked', () => {
    
    spyOn(component.onSignOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);

    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('[data-logout]') as HTMLButtonElement;

    expect(button).toBeTruthy();

    button.click();

    expect(component.onSignOut.emit).toHaveBeenCalled();

  })

});
