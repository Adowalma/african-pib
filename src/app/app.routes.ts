import { Routes } from '@angular/router';
import { Countries } from './pages/countries/countries';
import { Regional } from './pages/regional/regional';
import { Timeline } from './pages/timeline/timeline';
import { Dictionary } from './pages/dictionary/dictionary';

export const routes: Routes = [
  { path: '', component: Countries },
  { path: 'regional', component: Regional },
  { path: 'temporal', component: Timeline },
  { path: 'dicionario', component: Dictionary },
];
