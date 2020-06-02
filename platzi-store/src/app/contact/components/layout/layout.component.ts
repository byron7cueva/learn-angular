import { Component, OnInit } from '@angular/core';

import { EmployeeData } from '@core/models/employee.model';
import { GeneratorService } from '@core/services/generator.service';

const names = [
  'nicolas', 'juan', 'felipe', 'maria'
]

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  salesList: EmployeeData[] = [];
  bList: EmployeeData[] = [];

  constructor(
    private generatorService: GeneratorService
  ) { }

  ngOnInit(): void {
    // Popular
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.bList = this.generatorService.generate(names, [10, 20], 10);
  }

  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20])
    });
  }

}
