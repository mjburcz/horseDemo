import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { IHorse, INeeds } from '../../app/shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = 'assets/';
    
    constructor(private http: Http) { }

    getHorses() : Observable<IHorse[]> {
      return this.http.get(this.baseUrl + 'horses.json')
                  .map((res: Response) => res.json())
                  .catch(this.handleError);
    }

    getHorse(id: number) : Observable<IHorse> {
      return this.http.get(this.baseUrl + 'horses.json')
            .map((res: Response) => {
              let horse = res.json().filter((hor: IHorse) => hor.id === id);
              return (horse && horse.length) ? horse[0] : null;
            })
            .catch(this.handleError);
    }

    getNeeds(id: number) : Observable<INeeds[]> {
      return this.http.get(this.baseUrl + 'needs.json')
                  .map((res: Response) => {
                    let needs = res.json().filter((need: INeeds) => need.horseId === id);
                    return needs;
                  })
                  .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('server error:', error); 
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }

}