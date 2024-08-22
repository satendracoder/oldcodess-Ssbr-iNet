import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { IndexPageModule } from './index-page/index-page.module';
import { provideHttpClient, } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { AdsenseModule } from 'ng2-adsense';
import { provideToastr } from 'ngx-toastr';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    IndexPageModule,
    //Import ==> Adsense.! shown passing global defaults (optional)
    AdsenseModule.forRoot({
      adClient: 'ca-pub-7640562161899788',
      adSlot: 7259870550,
    }),
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideToastr(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



