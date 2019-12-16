import { Component, OnInit } from '@angular/core';

import { format, addDays } from 'date-fns';

@Component({
  selector: 'app-dates',
  template: `
    <h1>{{ date }}</h1>
  `,
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  date: string;

  constructor() { }

  ngOnInit() {
    const days = addDays(new Date(), 20);
    this.date = format(days, 'yyyy/MMMM/dd');
  }

}
