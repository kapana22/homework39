import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.css']
})
export class ThemeSwitchComponent {
  @Input() theme: string = 'light';
  @Output() themeChange = new EventEmitter<string>();

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.themeChange.emit(this.theme);
  }
}
