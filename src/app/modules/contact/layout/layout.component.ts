import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '@core/services/generator/generator.service';
import { EmployeeData } from '@core/models/employee-data.model';

const names = ['Cristhian', 'Maria', 'Carlos', 'Juan'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  list1: EmployeeData[] = [];
  list2: EmployeeData[] = [];

  constructor(private generatorService: GeneratorService) { }

  ngOnInit() {
    this.list1 = this.generatorService.generate(names, [10, 15], 10);
    this.list2 = this.generatorService.generate(names, [10, 15], 10);
  }

  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 15])
    });
  }

}
