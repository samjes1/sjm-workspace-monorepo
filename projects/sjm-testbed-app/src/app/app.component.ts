import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SjmSideMenuComponent} from 'sjm-side-menu'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SjmSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sjm-testbed-app';
}
