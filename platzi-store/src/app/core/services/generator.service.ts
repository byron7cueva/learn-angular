import { Injectable } from '@angular/core';

import { EmployeeData } from '../models/employee.model';

// interval Genera un valor cada cierto tiempo
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  generate(labels: string[], numRange: [number, number], width: number): EmployeeData[] {
    const result: EmployeeData[] = [];
    for (let i = 0; i < width; i += 1) {
      result.push(this.generateNode(labels, numRange));
    }
    return result;
  }

  generateNumber(numRange: [number, number]) {
    const diff = numRange[1] - numRange[0];
    return numRange[0] + Math.floor(Math.random() * diff);
  }

  generateLabel(labels: string[]) {
    return labels[Math.floor(Math.random() * labels.length)];
  }

  private generateNode(labels: string[], numRange: [number, number]): EmployeeData {
    return {
      label: this.generateLabel(labels),
      num: this.generateNumber(numRange)
    };
  }

  getData() {
    // El intervalo se lo pasa en millisegundos
    return interval(2000);
  }
}
