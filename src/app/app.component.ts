import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent, ThemeSwitchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'homework39'; // Define the title property here

  card1 = {
    image: 'https://images.pexels.com/photos/18129477/pexels-photo-18129477/free-photo-of-smiling-blonde-woman-sitting-with-guitar-on-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Card 1 Title',
    description: 'Description for Card 1',
    backgroundColor: 'lightblue'
  };

  card2 = {
    image: 'https://images.pexels.com/photos/18129477/pexels-photo-18129477/free-photo-of-smiling-blonde-woman-sitting-with-guitar-on-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Card 2 Title',
    description: 'Description for Card 2',
    backgroundColor: 'lightgreen'
  };

  theme: string = 'light';

  getThemeColor(): string {
    return this.theme === 'light' ? '#ffffff' : '#333333';
  }
}
