import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import { CarService } from '../../loyout/car.service';


class DataList {
  constructor(public id?, public renewalFee?, public cycle?, public name?, public time?) { }
}
class FromData {
  constructor(
    public product?,
    public stutas?,
    public renewalFee?,
    public checked1?,
    public checked2?,
    public bili?
  ) { }
}

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.scss']
})
export class StatisticalComponent implements OnInit, AfterViewInit {
  options1;
  options2;
  Detailed;

  date1: Date;
  date2: Date;

  indexList = new DataList();
  FromData = new FromData();

  checked1: boolean;
  checked2: boolean;

  isPostal: boolean;
  isDetailed: boolean;
  display: boolean;
  isNewbank: boolean;
  isCreateNew: boolean;
  isShow = true;
  modeArry = [];
  mode: any;
  money: any;
  Verification: any;

  constructor(private carService: CarService) {
  }
  ngOnInit() {

    this.modeArry = [
      { label: '平台余额', value: { id: 1, name: '平台余额' } },
      { label: '银行卡', value: { id: 2, name: '银行卡' } },
    ];

    this.options1 = {
      title: {
        y: '16px',
        text: '近30日交易单数情况'
      },
      grid: {
        left: '0%',
        right: '1%',
        bottom: '3%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis'
      },

      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
      },
      yAxis: {
        type: 'value'
      },
      itemStyle: {
        lineStyle: {
          color: '#000'
        }
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [10, 12, 21, 54, 260, 830, 710, 710, 54, 12, 10, 12, 21, 54, 260, 830, 710, 710, 54, 12, 10, 12, 21, 54, 260, 830, 710, 710, 54, 12]
        }
      ]
    };
    this.options2 = {
      title: {
        y: '16px',
        text: '近30日分润金额情况'
      },
      grid: {
        left: '0%',
        right: '1%',
        bottom: '3%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis'
      },

      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [10, 12, 21, 54, 20, 430, 710, 710, 54, 12, 10, 12, 21, 54, 260, 50, 310, 410, 54, 12, 10, 12, 21, 54, 260, 530, 610, 710, 54, 12]
        },
      ]
    };
    this.getNmbers();
  }
  ngAfterViewInit() {
    const myChart1 = echarts.init(document.getElementById('mainMap1'));
    myChart1.setOption(this.options1);
    const myChart2 = echarts.init(document.getElementById('mainMap2'));
    myChart2.setOption(this.options2);
  }
  getNmbers() {
    this.carService.getPackageSmall().then(cars => {
      this.Detailed = cars;
      console.log(cars);
    });
  }

  postalfn() {
    this.isPostal = true;
  }
  submitfu() {
    this.isPostal = false;
    this.isNewbank = false;
    this.isCreateNew = false;
  }
  Viewdetails() {
    this.isDetailed = true;
  }
  searchfu() {

    if (this.date1 === undefined && this.date2 === undefined) {
      return false;
    }
    const startTime = this.date1.getTime();
    const endTime = this.date2.getTime() + 86400000;

    this.carService.getPackageTime(startTime, endTime).then(cars => {
      this.Detailed = cars;
    });
  }

  MoveDialog(data) {
    this.indexList = data;
    this.display = true;
  }
  changBank() {
    this.isNewbank = true;
  }

  detailedfn() {
    this.isShow = !this.isShow;
  }

  CreateNewfun(data) {
    this.FromData = {
      product: data.product,
      bili: data.bili,
      renewalFee: data.renewalFee,
      stutas: data.stutas,
      checked1: data.stutas
    };
    this.isCreateNew = !this.isCreateNew;
  }

}
