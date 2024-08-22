import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticsRoutingModule } from './statics-routing.module';
import { WebDeveloperPageComponent } from './web-developer-page/web-developer-page.component';
import { ProgrammingPageComponent } from './programming-page/programming-page.component';
import { MicrosoftToolsPageComponent } from './microsoft-tools-page/microsoft-tools-page.component';
import { AppDeveloperPageComponent } from './app-developer-page/app-developer-page.component';
import { DataAnlyticesPageComponent } from './data-anlytices-page/data-anlytices-page.component';
import { SharedModule } from '../../shared/shared.module';
import { IndexPageModule } from '../../index-page/index-page.module';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { DatabasesPageComponent } from './databases-page/databases-page.component';


@NgModule({
  declarations: [
    WebDeveloperPageComponent,
    ProgrammingPageComponent,
    MicrosoftToolsPageComponent,
    AppDeveloperPageComponent,
    DataAnlyticesPageComponent,
    SkillsPageComponent,
    DatabasesPageComponent,
  ],
  imports: [
    CommonModule,
    StaticsRoutingModule,
    SharedModule,
    IndexPageModule
  ]
})
export class StaticsModule { }
