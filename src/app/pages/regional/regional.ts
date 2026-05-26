import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-regional',
  imports: [],
  templateUrl: './regional.html',
  styleUrl: './regional.css',
})
export class Regional {
  regional = signal<string>('Continental');
}
