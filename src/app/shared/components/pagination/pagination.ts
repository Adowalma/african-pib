import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination {
  page = input(1);
  totalPage = input(1);

  pageChange = output<number>();

  pages() {
    return Array(this.totalPage())
      .fill(0)
      .map((_, i) => i + 1);
  }
}
