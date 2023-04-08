import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './common/nav-menu/nav-menu.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';

import { FormConsultationComponent } from './pages/form-consultation/form-consultation.component';
import { BottonBannerComponent } from './common/botton-banner/botton-banner.component';
import { ToastrModule } from 'ngx-toastr';
import { SpinnerModule } from './components/spinner/spinner.module';
import { SpinnerInterceptor } from './components/interceptors/spinner.interceptor';
import { ServicesComponent } from './pages/services/services.component';
import { PartnerComponent } from './pages/partner/partner.component';


import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FaqComponent } from './pages/faq/faq.component';
import { TaCComponent } from './pages/ta-c/ta-c.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ReviewsComponent } from './common/reviews/reviews.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { AboutComponent } from './pages/about/about.component';
import { IConfig, NgxMaskModule } from 'ngx-mask'


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/Languages/', '.json')
}

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    HomeComponent,
    FormConsultationComponent,
    BottonBannerComponent,
    PartnerComponent,
    ServicesComponent,
    TaCComponent,
    FaqComponent,
    PrivacyPolicyComponent,
    PricingComponent,
    ReviewsComponent,
    DocumentsComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SpinnerModule,
    NgxMaskModule.forRoot(maskConfig),
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'contact', component: FormConsultationComponent},
      { path: 'services', component: ServicesComponent},
      { path: 'partner', component: PartnerComponent},
      { path: "FAQ", component: FaqComponent},
      { path: "terms-and-conditions", component: TaCComponent},
      { path: "privacy-policy", component: PrivacyPolicyComponent},
      { path: "princing", component: PricingComponent},
      { path: "how-to-repair-my-credit-by-myself", component: DocumentsComponent },
      { path: "aboutUs", component: AboutComponent }
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

  ],



  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
