import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { IHorse, INeeds, INeedItem } from '../shared/interfaces';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrls: [ './needs.component.css' ]
})
export class NeedsComponent implements OnInit {

  needs: INeeds[] = [];
  horse: IHorse;

  constructor(private dataService: DataService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.dataService.getNeeds(id).subscribe((needs: INeeds[]) => {
      this.needs = needs;
    });
    this.dataService.getHorse(id).subscribe((horse: IHorse) => {
      this.horse = horse;
    });
  }

}