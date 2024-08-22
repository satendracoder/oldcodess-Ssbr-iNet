import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssLayoutsComponent } from './css-layouts/css-layouts.component';
import { CssViewPageComponent } from './css-view-page/css-view-page.component';
import { RenderPageComponent } from './render-page/render-page.component';

const routes: Routes = [
  {
    path: '', title: "CSS Tutorial", component: CssLayoutsComponent, children: [
      { path: 'css', component: CssViewPageComponent },
      { path: 'css/:id', component: RenderPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssTutorialRoutingModule { }
