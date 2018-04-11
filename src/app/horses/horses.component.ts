import { Component, OnInit } from '@angular/core';

import { IHorse } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component({
    selector: 'app-horses',
    templateUrl: './horses.component.html'
})
export class HorsesComponent implements OnInit {
    title: string;
    horse: IHorse[];

    constructor(private dataservice: DataService) { }

    ngOnInit() { 
      this.title = 'Horses';
      this.dataservice.getHorses()
          .subscribe((horses: IHorse[]) => this.horse = horses);
      
      // this.people = [
      //     { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
      //     { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
      //     { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
      //     { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
      // ];
    }

}