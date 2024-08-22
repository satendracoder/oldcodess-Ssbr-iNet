import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyLayoutComponent } from './index-page/about-company/company-layout/company-layout.component';
import { NotFoundComponent } from './index-page/not-found/not-found.component';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './index-page/about-company/about-us/about-us.component';
import { DisclaimerComponent } from './index-page/about-company/disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from './index-page/about-company/privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './index-page/about-company/refund-policy/refund-policy.component';
import { TermsConditionsComponent } from './index-page/about-company/terms-conditions/terms-conditions.component';
import { CookiesPolicyComponent } from './index-page/about-company/cookies-policy/cookies-policy.component';
import { FaqDesignComponent } from './index-page/about-company/faq-design/faq-design.component';


const routes: Routes = [
  { path: '', component: IndexComponent, title: "Ssbr iNet Online Web Tutorials" },

  {
    path: 'company', component: CompanyLayoutComponent, children: [
      { path: 'about_us', component: AboutUsComponent, title: "About us" },
      { path: 'disclaimer', component: DisclaimerComponent, title: "Disclaimer" },
      { path: 'privacy_policy', component: PrivacyPolicyComponent, title: "Privacy_Policy" },
      { path: 'refund_policy', component: RefundPolicyComponent, title: "Refund_Policy" },
      { path: 'terms_condition', component: TermsConditionsComponent, title: "Terms_Condition" },
      { path: 'cookies_policy', component: CookiesPolicyComponent, title: "Cookies_Policy" },
      { path: 'frequently_asked_questions', component: FaqDesignComponent, title: "Frequently Asking Question’s" },
    ]
  },

  //Statics-Modules Lazy loading router =>
  { path: '', loadChildren: () => import('./authentication/auth/auth.module').then(mod => mod.AuthModule) },

  //Statics-Modules Lazy loading router =>
  { path: '', loadChildren: () => import('./authentication/admin/admin.module').then(mod => mod.AdminModule) },

  //Statics-Modules Lazy loading router =>
  { path: '', loadChildren: () => import('./all-statics-pages/statics/statics.module').then(mod => mod.StaticsModule) },

  // //Career-Pathes Lazy loading router =>
  // { path: '', loadChildren: () => import('./all-statics-pages/career-paths/career-paths.module').then(mod => mod.CareerPathsModule) },

  //CSS-Tutorial Lazy loading router =>
  { path: '', loadChildren: () => import('./modules/tutorials/frontend/css-tutorial/css-tutorial.module').then(mod => mod.CssTutorialModule) },

  //JavaScript-Tutorial Lazy loading router =>
  { path: '', loadChildren: () => import('./modules/tutorials/frontend/javascript/javascript.module').then(mod => mod.JavascriptModule) },




  { path: '**', component: NotFoundComponent }









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
