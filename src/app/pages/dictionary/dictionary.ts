import { Component } from '@angular/core';
import { Kpi } from './kpi/kpi';
import { Dicionario } from '../../services/dictionary.json';
import { Title } from '../../shared/components/title/title';

@Component({
  selector: 'app-dictionary',
  imports: [Kpi, Title],
  templateUrl: './dictionary.html',
  styleUrl: './dictionary.css',
})
export class Dictionary {
  dictionaryData = Dicionario;
}
