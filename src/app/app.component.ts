import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppBarComponent } from './app-bar/app-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppBarComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'pratique-exame-front';
}
