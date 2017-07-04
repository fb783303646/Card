import { Injectable } from '@angular/core';
import { Http, Response }   from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CarService {

  constructor(private http: Http) { }
  getCarsSmall() {
        return this.http.get('/assets/data/cars.json')
                .toPromise()
                .then(res => res.json().data)
                .then(data => { return data; });
    }

}
