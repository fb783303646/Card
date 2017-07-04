import { Component, OnInit  } from '@angular/core';

import * as echarts  from 'echarts'
import {CarService} from '../../loyout/car.service'


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  cities1=[];
  cities2=[];
  cities3=[];
  cities4=[];
  selectedCity1: any;	
  selectedCity2: any;
  selectedCity3: any;
  selectedCity4: any;
  constructor(private carService: CarService) { }
  
  ngOnInit() {

	this.cities1=[
		{label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
		{label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
		{label:'London', value:{id:3, name: 'London', code: 'LDN'}},
		{label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
		{label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
	] 	
	this.cities2=[
		{label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
		{label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
		{label:'London', value:{id:3, name: 'London', code: 'LDN'}},
		{label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
		{label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
	] 
	this.cities3=[
		{label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
		{label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
		{label:'London', value:{id:3, name: 'London', code: 'LDN'}},
		{label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
		{label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
	] 
	this.cities4=[
		{label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
		{label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
		{label:'London', value:{id:3, name: 'London', code: 'LDN'}},
		{label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
		{label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
	] 

  	const myChart = echarts.init(document.getElementById('main'));
    // 指定图表的配置项和数据
    const option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    series: [
		        {
		            name:'访问来源',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                }
		            },
		            color:['#ffc800','#61be63','#7852e5','#db3a1d','#757a7e'],
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {value:335, name:'直接访问'},
		                {value:0, name:'邮件营销'},
		                {value:0, name:'联盟广告'},
		                {value:0, name:'视频广告'},
		                {value:1548, name:'搜索引擎'}
		            ]
		        }
		    ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    this.addData();

  }

  	public items:Array<any> = [
		{id:'1',text:'Amsterdam'}, 
		{id:'2',text:'Antwerp'},
		{id:'3',text:'Athens'}
	];
	private value:any = {};

	public selected(value:any):void {
		console.log('Selected value is:', value);
	}
 
  	cars =[]

    addData(){
    	this.carService.getCarsSmall().then(cars => this.cars = cars);
    }

	display: boolean = false;
	indexList:any =  {
		ICCId: "",
		mian: "",
		nbomer: '',
		liulang: '',
		yiyong:'',
		status:"",
		time:"",
		beizhu:""
	};
    showDialog(e) {
        this.display = true;
		console.log(e);
		this.indexList = e;
    }





}
