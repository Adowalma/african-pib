import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination {
  extendedStyle = input(false);
  page = input(1);
  totalPage = input(1);

  start = input<number>();
  end = input<number>();

  pageChange = output<number>();

  pages() {
    return Array(this.totalPage())
      .fill(0)
      .map((_, i) => i + 1);
  }
}
