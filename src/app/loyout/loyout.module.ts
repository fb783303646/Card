import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import {SelectModule} from 'ng2-select';

import {
  SplitButtonModule,
  DataTableModule,
  SharedModule,
  DropdownModule,
  DialogModule,
  PaginatorModule,
  OverlayPanelModule,
  InputTextModule,
  InputTextareaModule,
  PanelMenuModule,
  MessagesModule,
  GrowlModule} from 'primeng/primeng';


import { LoyoutComponent } from './loyout.component'
import { Page1Component } from '../pages/page1/page1.component';
import { Page2Component } from '../pages/page2/page2.component';
import { Page3Component } from '../pages/page3/page3.component'

import {loyoutRoutes} from './loyout.routes';
import { HeaderComponent } from './header/header.component';
import { SiderComponent } from './sider/sider.component'
import {CarService} from './car.service'
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(loyoutRoutes),
    SelectModule,
    SplitButtonModule,
    DataTableModule,
    SharedModule,
    PanelMenuModule,
    DropdownModule,
    FormsModule,
    DialogModule,
    PaginatorModule,
    OverlayPanelModule,
    InputTextModule,
    InputTextareaModule,
    MessagesModule,
    GrowlModule
   
  ],
  declarations: [
	  LoyoutComponent,
	  Page1Component,
	  Page2Component,
    Page3Component,
	  HeaderComponent,
	  SiderComponent
  ],
  providers: [CarService]
})
export class LoyoutModule { }
