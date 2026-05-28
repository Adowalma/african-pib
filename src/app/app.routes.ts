import { Routes } from '@angular/router';
import { Countries } from './pages/countries/countries';
import { Regional } from './pages/regional/regional';
import { Timeline } from './pages/timeline/timeline';
import { Dictionary } from './pages/dictionary/dictionary';

export const routes: Routes = [
  { path: '', redirectTo: 'paises', pathMatch: 'full' },
  { path: 'paises', component: Countries, title: 'PIB por países' },
  { path: 'regional', component: Regional, title: 'PIB por Regiões' },
  { path: 'temporal', component: Timeline, title: 'PIB por linha Temporal' },
  { path: 'dicionario', component: Dictionary, title: 'PIB - Dicionário Técnico' },
];
