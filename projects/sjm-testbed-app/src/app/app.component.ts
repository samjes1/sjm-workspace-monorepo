import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SjmSideMenuComponent, TitleColor } from "../../../sjm-side-menu/src/lib/sjm-side-menu.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SjmSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sjm-testbed-app';


  TitleColor = TitleColor;
  isAuthenticated = signal(true);
}
