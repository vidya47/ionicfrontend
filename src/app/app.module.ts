import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { BrowserXhr } from '@angular/http';
import {CustExtBrowserXhr} from '../cust-ext-browser-xhr';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserpagePage } from '../pages/userpage/userpage';
import { SignupPage } from '../pages/signup/signup';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserpagePage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserpagePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    {provide: BrowserXhr, useClass:CustExtBrowserXhr}
  ]
})
export class AppModule {}
