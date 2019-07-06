import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BridgeProvider } from "../providers/bridge/bridge";
import { AddDetailPage } from '../pages/add-detail/add-detail';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { SharePage } from '../pages/share/share';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { AboutUsPage } from '../pages/about-us/about-us';
import { LegalTermsPage } from '../pages/legal-terms/legal-terms';
import { FaqPage } from '../pages/faq/faq';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddDetailPage,
    ChangePasswordPage,
    SharePage,
    ContactUsPage,
    AboutUsPage,
    LegalTermsPage,
    FaqPage,
    SettingsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddDetailPage,
    ChangePasswordPage,
    SharePage,
    ContactUsPage,
    AboutUsPage,
    LegalTermsPage,
    FaqPage,
    SettingsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BridgeProvider,
    HttpClientModule,
    SQLite
  ]
})
export class AppModule {}
