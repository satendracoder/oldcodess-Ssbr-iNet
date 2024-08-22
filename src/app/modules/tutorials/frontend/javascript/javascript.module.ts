import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { JsLayoutsComponent } from './js-layouts/js-layouts.component';
import { JsSidebarComponent } from './js-sidebar/js-sidebar.component';
import { JsDefaultsPageComponent } from './js-defaults-page/js-defaults-page.component';
import { JsRenderPageComponent } from './js-render-page/js-render-page.component';
import { SharedModule } from '../../../../shared/shared.module';
import { IndexPageModule } from '../../../../index-page/index-page.module';


@NgModule({
  declarations: [
    JsLayoutsComponent,
    JsSidebarComponent,
    JsDefaultsPageComponent,
    JsRenderPageComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule,
    SharedModule,
    IndexPageModule
  ]
})
export class JavascriptModule { }
