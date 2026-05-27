import { Component, computed, signal } from '@angular/core';
import { Regioes } from '../../services/regionals.json';

@Component({
  selector: 'app-regional',
  imports: [],
  templateUrl: './regional.html',
  styleUrl: './regional.css',
})
export class Regional {
  regional = signal<string>('Continental');

  reginonalData = signal(Regioes);

  regionalList = Regioes;

  years = ['2000', '2006', '2010', '2014', '2019', '2022', '2023'];

  selectedYear = signal<string>('2000');

  filteredData = computed(() => {
    const regionalList = this.reginonalData();
    const regionalName = this.regional();
    const year = this.selectedYear();

    const foundedRegional = regionalList.find((item) => item.Regiao === regionalName);
    if (!foundedRegional) return null;

    const regionalDataSelected = foundedRegional as any;

    return {
      pibTotal: regionalDataSelected[`PIB_Total_${year}_Bi`],
    };

    // console.log(regionalItem['Regiao'][this.regional()]);
  });

  onYearChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedYear.set(selectElement.value);
  }
}
