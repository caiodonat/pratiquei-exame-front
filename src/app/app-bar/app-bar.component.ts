import { Component } from '@angular/core';

export interface tab {
  title: string;
  link: string;
}

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.css'
})

export class AppBarComponent {
  leftTabs: tab[] = [
    {
      title: "Home",
      link: "/home"
    },
    {
      title: "Pratique Exame",
      link: "/practice"
    }
  ];

  rightTabs: tab[] = [
    {
      title: "Sobre",
      link: "/about"
    }
  ];
}
