import { Injectable } from '@angular/core';
import { Http, Response }   from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CarService {

  constructor(private http: Http) { }

  getCarsSmall(keyWord?:string,stutas?:number){
        return this.http
        .get('/assets/data/cars.json')
        .map(res=>{
             let result: any = res.json();
             if(!!keyWord){
               result = result.filter(x=>{
                 return  x.ICCId.indexOf(keyWord) != -1 || x.mian.indexOf(keyWord) != -1
              })
             }
             if(!!stutas){
               result = result.filter(x=>{
                 return  x.status.indexOf(stutas) != -1
              })
             }
             return result
        })
        .toPromise()
    }

}
