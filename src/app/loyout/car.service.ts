import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CarService {

  constructor(private http: Http) { }

  getCarsSmall(keyWord?: string, status?: any) {
    return this.http
      .get('/assets/data/cars.json')
      .map(res => {
        let result: any = res.json();
        if (!!keyWord) {
          result = result.filter(x => {
            return x.ICCId.indexOf(keyWord) !== -1 || x.mian.indexOf(keyWord) !== -1;
          });
        }

        if (!!status) {
          result = result.filter(x => {
            if (status.id === 1) {
              return x;
            }
            return x.status.indexOf(status.id) !== -1;
          });
        }
        return result;
      })
      .toPromise();
  }

  getPackageSmall(data?: any) {
    return this.http
      .get('/assets/data/Package.json')
      .map(res => {
        let result = res.json();
        if (!!data) {
          result = result.filter(x => {
            if ( x.id !== data.id) {
              return x;
            }
          });
        }
        return result;
      })
      .toPromise();
  }
  getPackageTime(startTime?: any, endTime?: any) {
    return this.http
      .get('/assets/data/Package.json')
      .map(res => {
        let result = res.json();
        result = result.filter((val, i) => {
           const times = new Date(val.time).getTime();
            if (times >= startTime && endTime >= times ) {
              return val;
            }
        });
        return result;
      })
      .toPromise();
  }

}
