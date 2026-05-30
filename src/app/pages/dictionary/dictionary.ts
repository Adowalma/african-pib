import { Component, computed, signal } from '@angular/core';
import { Dicionario } from '../../services/dictionary.json';
import { Title } from '../../shared/components/title/title';
import { Pagination } from '../../shared/components/pagination/pagination';

@Component({
  selector: 'app-dictionary',
  imports: [Title, Pagination],
  templateUrl: './dictionary.html',
  styleUrl: './dictionary.css',
})
export class Dictionary {
  dictionaryData = signal(Dicionario);

  page = signal(1);
  pageSize = 6;

  start: number = 0;
  end: number = 0;

  totalPages = computed(() => Math.ceil(this.dictionaryData().length / this.pageSize));

  paginatedData = computed(() => {
    this.start = (this.page() - 1) * this.pageSize;
    this.end = this.start + this.pageSize;

    return this.dictionaryData().slice(this.start, this.end);
  });
}
