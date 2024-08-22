import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssTutorialRoutingModule } from './css-tutorial-routing.module';
import { CssLayoutsComponent } from './css-layouts/css-layouts.component';
import { CssSidebarComponent } from './css-sidebar/css-sidebar.component';
import { CssViewPageComponent } from './css-view-page/css-view-page.component';
import { SharedModule } from '../../../../shared/shared.module';
import { IndexPageModule } from '../../../../index-page/index-page.module';
import { RenderPageComponent } from './render-page/render-page.component';


@NgModule({
  declarations: [
    CssLayoutsComponent,
    CssSidebarComponent,
    CssViewPageComponent,
    RenderPageComponent
  ],
  imports: [
    CommonModule,
    CssTutorialRoutingModule,
    SharedModule,
    IndexPageModule
  ]
})
export class CssTutorialModule { }
