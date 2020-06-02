import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { EmployeeData } from '@core/models/employee.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  // Detecta a que componente se esta relacionando el cambio y solo hace la deteccion de cambio a ese componente
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  // Datos de entrada
  @Input() title: string;
  @Input() data: EmployeeData[] = [];

  // Datos de salida
  @Output() add = new EventEmitter<string>();

  label: string;

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    // Aqui no se debe hacer la afectacion de datos
    /* this.data.push({
      label: this.label,
      num: 30
    }); */
    // Con un output se debe notificar al componente Smart
    this.add.emit(this.label);
    this.label = '';
  }
}
