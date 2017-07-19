import { Component, OnInit } from '@angular/core';
import { CarService } from '../../loyout/car.service';
import {ConfirmationService} from 'primeng/primeng';

class FromData  {
    constructor(public packageSelects?, public cycleSelect?, public operatorSelect?, public renewalFee?) {}
}

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  providers: [ConfirmationService]
})
export class PersonalComponent implements OnInit {
  headtitle;
  NewTitle = '新建';
  configTitle = '编辑';

  msgs;

  Packages = [];
  isNewCreate = false;

  packageArry = [];
  cycleArry = [];
  operatorArry = [];
  form = new FromData();
  dataIndx;

  isNew: boolean;

  constructor(private Carservice: CarService, private confirmationService: ConfirmationService ) {}

  ngOnInit() {
    this.getPackgages();
    this.packageArry = [
      { label: '101M/月', value: { id: 2, name: '10M/月', code: 'RM' } },
      { label: '102M/月', value: { id: 3, name: '100M/月', code: 'LDN' } },
      { label: '103M/月', value: { id: 2, name: '10M/月', code: 'RM' } },
      { label: '104M/月', value: { id: 3, name: '100M/月', code: 'LDN' } },
      { label: '105M/月', value: { id: 2, name: '10M/月', code: 'RM' } },
      { label: '106M/月', value: { id: 3, name: '100M/月', code: 'LDN' } },
      { label: '107M/月', value: { id: 2, name: '10M/月', code: 'RM' } },
      { label: '108M/月', value: { id: 3, name: '100M/月', code: 'LDN' } },
      { label: '109M/月', value: { id: 2, name: '10M/月', code: 'RM' } },
      { label: '110M/月', value: { id: 3, name: '100M/月', code: 'LDN' } }
    ];
    this.cycleArry = [
      { label: '1', value: { id: 2, name: '1'} },
      { label: '2', value: { id: 3, name: '2'} },
      { label: '3', value: { id: 2, name: '3'} },
      { label: '6', value: { id: 3, name: '6'} },
      { label: '8', value: { id: 2, name: '8'} },
      { label: '9', value: { id: 3, name: '9'} },
      { label: '12', value: { id: 3, name: '12'} },
      { label: '18', value: { id: 2, name: '18'} },
      { label: '24', value: { id: 3, name: '24'} }
    ];
    this.operatorArry = [
      { label: 'YD', value: { id: 1, name: 'YD' } },
      { label: 'LI', value: { id: 2, name: 'LI' } },
      { label: 'LT', value: { id: 3, name: 'LT' } }
    ];
  }
  getPackgages() {
    this.Carservice.getPackageSmall().then(res => {
      this.Packages = res;
    });
  }

  NewlyBuild(type, data?: any) {
    this.dataIndx = data;
    if (type === '新建') {
       this.headtitle = type;
       this.isNew = true;
       this.form = new FromData();
    } else if (type === '编辑') {
       console.log(data);

       this.form = new FromData(data.package, data.cycle, data.operator, data.renewalFee);
       console.log(this.form);
       this.headtitle = type;
       this.isNew = false;
    }
    this.isNewCreate = true;
  }

  save() {
      const cars = [...this.Packages];
      if ( this.isNew ) {
        cars.unshift({package: this.form.packageSelects.name, renewalFee: this.form.renewalFee, operator: this.form.operatorSelect.name, cycle: this.form.cycleSelect.name});
      } else {

        if (this.form.packageSelects.name === undefined || this.form.operatorSelect.name === undefined || this.form.cycleSelect.name === undefined ) {
          this.msgs = [];
          this.msgs.push({ severity: 'info', summary: '未选择运营商', detail: '未选择运营商' });
          return false;
        }
        const index = this.Packages.indexOf(this.dataIndx);
        cars[index] = {package: this.form.packageSelects.name, renewalFee: this.form.renewalFee, operator: this.form.operatorSelect.name, cycle: this.form.cycleSelect.name};
      }
     this.Packages = cars;
     this.isNewCreate = false;
  }

  confirm2(data) {
      this.confirmationService.confirm({
          message: '确定要删除该配置吗?',
          header: '删除配置',
          icon: 'fa fa-trash',
          accept: () => {
            this.delfun(data);
          },
          reject: () => {
              // this.msgs = [{severity: 'info', summary: '1111', detail: 'You have rejected'}];
          }
      });
  }

  delfun(data) {
    const index = this.Packages.indexOf(data);
    this.Packages = this.Packages.filter((val, i ) => {
      return i !== index;
    });

    // const dataList = this.Packages;
    // const index = this.Packages.indexOf(data);
    //  if (index > -1) {
    //   dataList.splice(index, 1);
    //  };
    // this.Packages = dataList;
    // console.log(this.Packages);

  }




}


