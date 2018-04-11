import {toString } from '../../../../node_modules/tsickle/src/jsdoc';
import { Component, Input, OnInit } from '@angular/core';

import { SorterService } from '../../core/sorter.service';
import { IHorse } from '../../shared/interfaces';

@Component({
    selector: 'app-horses-list',
    templateUrl: './horses-list.component.html'
})
export class HorsesListComponent implements OnInit {
    private _horses: IHorse[] = [];
    @Input() get horses(): IHorse[] { 
        return this._horses; 
    };
    set horses(value: IHorse[]) { 
        if (value) {
            this.filteredHorses = this._horses = value; 
            this.calculateNeeds();
        }
    }
    filteredHorses: IHorse[] = [];
    horsesNeedTotal: number;
    currencyCode: string = 'USD';

    constructor(private sorterService: SorterService) { }

    ngOnInit() { 
        
    }

    calculateNeeds() {
        this.horsesNeedTotal = 0;
        this.filteredHorses.forEach((hor: IHorse) => {
            this.horsesNeedTotal += hor.needTotal;
        });
    }

    filter(data: string) {
        if (data) {
            this.filteredHorses = this.horses.filter((hor: IHorse) => {
                return hor.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       hor.color.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                    //    hor.dob.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       hor.needTotal.toString().indexOf(data) > -1;
            });
            this.calculateNeeds();
        } else {
            this.filteredHorses = this.horses;
        }
    }

    sort(prop: string) {
        this.sorterService.sort(this.filteredHorses, prop);
    }

    horseTrackBy(index: number, horse: IHorse) {
        return horse.id;
    }

}