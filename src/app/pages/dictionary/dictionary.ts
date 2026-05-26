import { Component } from '@angular/core';
import { Kpi } from './kpi/kpi';
import { Dicionario } from '../../services/dictionary.json';

@Component({
  selector: 'app-dictionary',
  imports: [Kpi],
  templateUrl: './dictionary.html',
  styleUrl: './dictionary.css',
})
export class Dictionary {
  dictionaryData = Dicionario;
}
