import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebDeveloperPageComponent } from './web-developer-page/web-developer-page.component';
import { AppDeveloperPageComponent } from './app-developer-page/app-developer-page.component';
import { ProgrammingPageComponent } from './programming-page/programming-page.component';
import { DataAnlyticesPageComponent } from './data-anlytices-page/data-anlytices-page.component';
import { MicrosoftToolsPageComponent } from './microsoft-tools-page/microsoft-tools-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { DatabasesPageComponent } from './databases-page/databases-page.component';


const routes: Routes = [
  { path: 'categories/web_development_tutorials', component: WebDeveloperPageComponent, title: 'Web Development Tutorials' },
  { path: 'categories/computer_programming_tutorials', component: ProgrammingPageComponent, title: 'Programming Tutorials | Learn to Coding' },
  { path: 'categories/database_tutorials', component: DatabasesPageComponent },
  { path: 'categories/mobile_app_tutorials', component: AppDeveloperPageComponent, title: 'Mobile App-Development' },
  { path: 'categories/big_data_tutorials', component: DataAnlyticesPageComponent, title: 'Data Analytics' },
  { path: 'categories/microsoft_technologies_tutorials', component: MicrosoftToolsPageComponent, title: 'Microsoft-Technologies' },
  { path: 'categories/digital_marketing_lists', component: SkillsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticsRoutingModule { }
