import { Component, OnInit } from '@angular/core';
import { CarService } from '../../loyout/car.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  Packages;
  isNewCreate = false;
  packageArry = [];
  cycleArry = [];
  operatorArry = [];
  packageSelects: any;
  cycleSelect: any;
  operatorSelect: any;

  constructor(private Carservice: CarService ) { }

  ngOnInit() {
    this.getPackgages();
    this.packageArry = [
      { label: '10M/月', value: { id: 2, name: '10M/月', code: 'RM' } },
      { label: '100M/月', value: { id: 3, name: '100M/月', code: 'LDN' } },
    ];
    this.cycleArry = [
      { label: '10M/月', value: { id: 2, name: '10M/月', code: 'RM' } },
      { label: '100M/月', value: { id: 3, name: '100M/月', code: 'LDN' } },
    ];
    this.operatorArry = [
      { label: '10M/月', value: { id: 2, name: '10M/月', code: 'RM' } },
      { label: '100M/月', value: { id: 3, name: '100M/月', code: 'LDN' } },
    ];
  }
  getPackgages() {
    this.Carservice.getPackageSmall().then(res => {
      this.Packages = res;
      console.log(res);
    });
  }
  NewlyBuild() {
    this.isNewCreate = true;
  }
}
