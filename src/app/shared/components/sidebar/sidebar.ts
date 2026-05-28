import { Component, DOCUMENT, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  isDark = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleTheme() {
    this.isDark = !this.isDark;
    const htmlTag = this.document.documentElement; // Seleciona a tag <html>

    if (this.isDark) {
      htmlTag.classList.remove('light');
      htmlTag.classList.add('dark');
    } else {
      htmlTag.classList.remove('dark');
      htmlTag.classList.add('light');
    }
  }
}
