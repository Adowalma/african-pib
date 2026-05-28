import { Component, computed, signal } from '@angular/core';
import { paises } from '../../services/country.json';
import { Title } from '../../shared/components/title/title';

@Component({
  selector: 'app-countries',
  imports: [Title],
  templateUrl: './countries.html',
  styleUrl: './countries.css',
})
export class Countries {
  countriesData = signal(paises);

  years = [
    '2000',
    '2006',
    '2009',
    '2010',
    '2014',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2000_2023',
    '2000_2015',
  ];

  selectedYear = signal<string>('2000');

  selectedYearData = computed(() => {
    const year = this.selectedYear();

    const countryList = this.countriesData();

    return countryList.map((country) => {
      const countryData = country as any;
      return {
        country: country.Pais,
        code: country.Codigo_ISO3,
        capital: country.Capital,

        pib: countryData[`PIB_${year}_USD_Bilhoes`] || 'N/A',
        pibHabitant: countryData[`PIB_por_Habitante_${year}_USD`] || 'N/A',
        pibGrow: countryData[`Crescimento_PIB_${year}`] || 'N/A',
      };
    });
  });

  onYearChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedYear.set(selectElement.value);
  }
}
