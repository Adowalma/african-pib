import { Component, computed, signal } from '@angular/core';
import { Regioes } from '../../services/regionals.json';
import { Title } from '../../shared/components/title/title';

@Component({
  selector: 'app-regional',
  imports: [Title],
  templateUrl: './regional.html',
  styleUrl: './regional.css',
})
export class Regional {
  regionalList = Regioes;

  years = ['2000', '2006', '2010', '2019', '2022', '2023'];

  regional = signal<string>('');
  selectedYear = signal<string>('2000');

  filteredData = computed(() => {
    const nomeRegiao = this.regional();
    const ano = this.selectedYear();

    const linhaRegiao = this.regionalList.find(
      (item) => item.Regiao.toLowerCase() === nomeRegiao.toLowerCase(),
    );
    if (!linhaRegiao) return null;

    const chavePib = `PIB_Total_${ano}_Bi` as keyof typeof linhaRegiao;

    // Retorna os dados mapeados de forma direta
    return {
      pibTotal: linhaRegiao[chavePib] || 0,
      pibPc: linhaRegiao.PIBpc_Medio_2023,
    };
  });

  onYearChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedYear.set(selectElement.value);
  }
}
