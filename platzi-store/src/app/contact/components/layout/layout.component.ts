import { Component, OnInit, OnDestroy } from '@angular/core';

import { EmployeeData } from '@core/models/employee.model';
import { GeneratorService } from '@core/services/generator.service';
import { Subscription } from 'rxjs';

const names = [
  'nicolas', 'juan', 'felipe', 'maria'
]

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  salesList: EmployeeData[] = [];
  bList: EmployeeData[] = [];
  value: number;
  sub$: Subscription;


  constructor(
    private generatorService: GeneratorService
  ) { }

  ngOnInit(): void {
    // Popular
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.bList = this.generatorService.generate(names, [10, 20], 10);

    // Suscribiendonos a la generacion de un valor
    this.sub$ = this.generatorService.getData()
    .subscribe(value => {
      this.value = value;
      console.log('value', this.value);
    });
  }

  // Cuando ya no se esta utilizando el componente
  ngOnDestroy() {
    console.log('Destroy');
    // Desuscribir a una suscripcion
    this.sub$.unsubscribe();
  }

  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20])
    });
  }

}
