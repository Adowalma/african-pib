import { Component } from '@angular/core';
import { Kpi } from './kpi/kpi';

@Component({
  selector: 'app-dictionary',
  imports: [Kpi],
  templateUrl: './dictionary.html',
  styleUrl: './dictionary.css',
})
export class Dictionary {}
