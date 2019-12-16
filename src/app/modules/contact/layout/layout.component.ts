import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { GeneratorService } from '@core/services/generator/generator.service';
import { EmployeeData } from '@core/models/employee-data.model';

const names = ['Cristhian', 'Maria', 'Carlos', 'Juan'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  list1: EmployeeData[] = [];
  list2: EmployeeData[] = [];
  value: number;
  sub$: Subscription;

  constructor(private generatorService: GeneratorService) { }

  ngOnInit() {
    this.list1 = this.generatorService.generate(names, [10, 15], 10);
    this.list2 = this.generatorService.generate(names, [10, 15], 10);

    this.sub$ = this.generatorService.getData()
    .subscribe(value => {
      this.value = value;
      console.log(this.value);
    });
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 15])
    });
  }

}
