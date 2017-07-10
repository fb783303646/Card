import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';
@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {

 private items=[];

    ngOnInit() {
         this.items = [
            {label: '订购管理',items: [{label: '订购管理'},{label: '订购管理'}]},
            {label: '项目管理',items: [{label: '移动卡片管理',routerLink: ['/page1']},{label: '联通卡片管理',routerLink: ['/page2']},{label: '电信卡片管理',routerLink: ['/page3']}]},
            {label: '产品管理',items: [{label: '订购管理'},{label: '订购管理'}]},
            {label: '账号管理',items: [{label: '订购管理'},{label: '订购管理'}]}
        ];
    }



}
