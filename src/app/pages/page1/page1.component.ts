import { Component, OnInit } from '@angular/core';

import * as echarts from 'echarts';
import { CarService } from '../../loyout/car.service';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  data = [];

  tatol: number;
  DueDate: number;

  Activation = 0;
  Activated = 0;
  Disable = 0;
  invalid = 0;
  Stateless = 0;

  cities1 = [];
  cities2 = [];
  cities3 = [];
  cities4 = [];
  cities5 = [];
  selectedCity1: any;
  selectedCity2: any;
  selectedCity3: any;
  selectedCity4: any;
  selectedCity5: any;

  display = false;
  dis = false;
  isflow = false;
  ispopup = false;
  istransfer = false;
  Unbundling = false;
  indexList: any = {
    ICCId: '',
    mian: '',
    nbomer: '',
    liulang: '',
    yiyong: '',
    status: '',
    time: '',
    beizhu: ''
  };

  tatolCars: any = [];
  cars: any = [];
  selectedCars = [];
  searchdata;

  kaNmbers = [];
  Remarks: any;

  msgs;
  PhoneNumber: string;
  options;


  constructor(private carService: CarService) {

    this.options = {
      title: {
        text: '30天的流量数据'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '成交',
          type: 'line',
          smooth: true,
          itemStyle: { normal: { areaStyle: { type: 'default' } } },
          data: [10, 12, 21, 54, 260, 830, 710, 710, 54, 12, 10, 12, 21, 54, 260, 830, 710, 710, 54, 12, 10, 12, 21, 54, 260, 830, 710, 710, 54, 12]
        }
      ]
    };
   }

  ngOnInit() {

    this.cities1 = [
      { label: '所有', value: { id: 1, name: '所有', code: 'NY' } },
      { label: '已激活', value: { id: 2, name: '已激活', code: 'RM' } },
      { label: '已停用', value: { id: 3, name: '已停用', code: 'LDN' } },
      { label: '可激活', value: { id: 4, name: '可激活', code: 'IST' } },
      { label: '失效', value: { id: 5, name: '失效', code: 'PRS' } }
    ];
    this.cities2 = [
      { label: '请选择项目名称', value: { id: 1, name: '请选择项目名称', code: 'NY' } },
    ];
    this.cities3 = [
      { label: '所有', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: '深圳市微科通讯设备有限公司', value: { id: 2, name: '深圳市微科通讯设备有限公司', code: 'RM' } },
      { label: 'QWE[123QWE]', value: { id: 3, name: 'QWE[123QWE]', code: 'LDN' } },
    ];
    this.cities4 = [
      { label: '全部', value: { id: 1, name: '全部', code: 'NY' } },
      { label: '移动_30M/月_包年', value: { id: 2, name: '移动_30M/月_包年', code: 'RM' } },
    ];
    this.cities5 = [
      { label: '深圳市微科通讯设备有限公司', value: { id: 2, name: '深圳市微科通讯设备有限公司', code: 'RM' } },
      { label: 'QWE[123QWE]', value: { id: 3, name: 'QWE[123QWE]', code: 'LDN' } },
    ];


    // 指定图表的配置项和数据

    // 使用刚指定的配置项和数据显示图表。
    this.addData();

  }

  addData() {
      this.carService.getCarsSmall().then(cars => {
      this.cars = cars;
      this.tatolCars = cars;
      this.getNumber();
    });

  }

  getNumber() {
    const myChart = echarts.init(document.getElementById('main'));
    this.tatol = this.tatolCars.length;
    // this.DueDate  =this.tatolCars.length;
    const len = this.tatol;
    const status = this.tatolCars.status;
    for (let i = 0; i < len; i++) {
      if (this.tatolCars[i].status === '2') { this.Activation++; };
      if (this.tatolCars[i].status === '3') { this.Activated++; };
      if (this.tatolCars[i].status === '4') { this.Disable++; };
      if (this.tatolCars[i].status === '5') { this.invalid++; };
      if (this.tatolCars[i].status === '6') { this.Stateless++; };
    }

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            }
          },
          color: ['#ffc800', '#61be63', '#7852e5', '#db3a1d', '#757a7e'],
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: this.Activation, name: '直接访问' },
            { value: this.Activated, name: '邮件营销' },
            { value: this.Disable, name: '联盟广告' },
            { value: this.invalid, name: '视频广告' },
            { value: this.Stateless, name: '搜索引擎' }
          ]
        }
      ]
    };
    myChart.setOption(option);
  }

  async addsearch() {
    if (this.searchdata !== undefined) {
      this.cars = await this.carService.getCarsSmall(this.searchdata, this.selectedCity1);
    }

  }

  showDialog(e) {
    this.display = true;
    this.indexList = e;
  }

  SendSms() {

    if (this.selectedCars !== undefined && this.selectedCars.length >= 1) {

      this.PhoneNumber = '';
      const nmbbox = [];
      this.selectedCars.forEach((element, index) => {
        nmbbox.push(element.ICCId);
      });
      this.PhoneNumber = nmbbox.join(';');
      this.dis = true;

    } else {
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: '短信收发', detail: '您未选择收发号码，请选择号码' });
    }
  }

  SendSuccess() {
    this.selectedCars = [];
    this.dis = false;
    this.istransfer = false;
    this.Unbundling = false;
  }

  addFlow() {
    this.isflow = true;
    const myChart = echarts.init(document.getElementById('EchartId'));
    myChart.setOption(this.options);
  }

  addKanmber() {
    this.kaNmbers = [];
    this.selectedCars.forEach((element, index) => {
      this.kaNmbers.push(element.ICCId);
    });
  }

  editfu() {
    if (this.selectedCars !== undefined && this.selectedCars.length >= 1) {
      this.addKanmber();
      this.ispopup = true;
    } else {
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: '卡片信息编辑', detail: '您未选择编辑号码，请选择号码' });
    }
  }
  editfuSubmit() {
    this.selectedCars = [];
    this.ispopup = false;
  }
  transferfn() {
    if (this.selectedCars !== undefined && this.selectedCars.length >= 1) {
      this.addKanmber();
      this.istransfer = true;
    } else {
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: '卡片划拨', detail: '您未选择划拨号码，请选择号码' });
    }
  }
  Unbundlingfu() {
    if (this.selectedCars !== undefined && this.selectedCars.length >= 1) {
      this.addKanmber();
      this.Unbundling = true;
    } else {
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: '用户解绑', detail: '您未选择解绑用户' });
    }

  }

}
