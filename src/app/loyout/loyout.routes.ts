import { RouterModule } from '@angular/router';
// import {AppComponent } from './app.component';
import { LoyoutComponent } from './loyout.component'
import { Page1Component } from '../pages/page1/page1.component';
import { Page2Component } from '../pages/page2/page2.component';
import { Page3Component } from '../pages/page3/page3.component';
export const loyoutRoutes=[
     {
     	path: '',
    	component: LoyoutComponent,
    	children: [
	      { path: '', redirectTo: 'page1', pathMatch: 'full' },
	      { path: 'page1', component: Page1Component },
	      { path: 'page2', component: Page2Component },
		  { path: 'page3', component: Page3Component },
	  	],
     },

	
];
