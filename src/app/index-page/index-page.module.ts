import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BannerCardComponent } from './banner-card/banner-card.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { LibraryCardComponent } from './library-card/library-card.component';
import { QuizCardComponent } from './quiz-card/quiz-card.component';
import { DigitalCardComponent } from './digital-card/digital-card.component';
import { CareerCardComponent } from './career-card/career-card.component';
import { BestGuidanceComponent } from './best-guidance/best-guidance.component';
import { FaqCardComponent } from './faq-card/faq-card.component';
import { FooterCardComponent } from './footer-card/footer-card.component';
import { SharedModule } from '../shared/shared.module';
import { RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { CompanyLayoutComponent } from './about-company/company-layout/company-layout.component';
import { AboutUsComponent } from './about-company/about-us/about-us.component';
import { DisclaimerComponent } from './about-company/disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from './about-company/privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './about-company/refund-policy/refund-policy.component';
import { TermsConditionsComponent } from './about-company/terms-conditions/terms-conditions.component';
import { CookiesPolicyComponent } from './about-company/cookies-policy/cookies-policy.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutSidebarComponent } from './about-company/about-sidebar/about-sidebar.component';
import { FaqDesignComponent } from './about-company/faq-design/faq-design.component';
import { CategoryComponent } from './category/category.component';
import { CompilersCardComponent } from './compilers-card/compilers-card.component';



@NgModule({
  declarations: [
    MainMenuComponent,
    BannerCardComponent,
    ServiceCardComponent,
    LibraryCardComponent,
    QuizCardComponent,
    DigitalCardComponent,
    CareerCardComponent,
    BestGuidanceComponent,
    FaqCardComponent,
    FooterCardComponent,
    CompanyLayoutComponent,
    AboutUsComponent,
    DisclaimerComponent,
    PrivacyPolicyComponent,
    RefundPolicyComponent,
    TermsConditionsComponent,
    CookiesPolicyComponent,
    NotFoundComponent,
    AboutSidebarComponent,
    FaqDesignComponent,
    CategoryComponent,
    CompilersCardComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    RouterLinkWithHref
  ],
  exports: [
    MainMenuComponent,
    BannerCardComponent,
    ServiceCardComponent,
    LibraryCardComponent,
    QuizCardComponent,
    DigitalCardComponent,
    CareerCardComponent,
    BestGuidanceComponent,
    FaqCardComponent,
    FooterCardComponent,
    CategoryComponent,
    CompilersCardComponent,

    RouterLink,
    RouterLinkActive,
    RouterLinkWithHref
  ]
})
export class IndexPageModule { }
