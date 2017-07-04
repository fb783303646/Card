import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import {SelectModule} from 'ng2-select';

import {SplitButtonModule} from 'primeng/primeng';
import {DataTableModule,SharedModule,DropdownModule,DialogModule,PaginatorModule} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/primeng';

import { LoyoutComponent } from './loyout.component'
import { Page1Component } from '../pages/page1/page1.component';
import { Page2Component } from '../pages/page2/page2.component';

import {loyoutRoutes} from './loyout.routes';
import { HeaderComponent } from './header/header.component';
import { SiderComponent } from './sider/sider.component'
import {CarService} from './car.service'
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(loyoutRoutes),
    SelectModule,
    SplitButtonModule,
    DataTableModule,
    SharedModule,
    PanelMenuModule,
    DropdownModule,
    FormsModule,
    DialogModule,
    PaginatorModule
   
  ],
  declarations: [
	  LoyoutComponent,
	  Page1Component,
	  Page2Component,
	  HeaderComponent,
	  SiderComponent
  ],
  providers: [CarService]
})
export class LoyoutModule { }
