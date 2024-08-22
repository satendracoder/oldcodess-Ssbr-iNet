import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsLayoutsComponent } from './js-layouts/js-layouts.component';
import { JsDefaultsPageComponent } from './js-defaults-page/js-defaults-page.component';
import { JsRenderPageComponent } from './js-render-page/js-render-page.component';

const routes: Routes = [
  {
    path: '', component: JsLayoutsComponent, children: [
      { path: 'js', component: JsDefaultsPageComponent, title: 'JavaScript' },
      { path: 'js/:id', component: JsRenderPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
