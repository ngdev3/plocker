import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AddDetailPage } from '../pages/add-detail/add-detail';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { AboutUsPage } from '../pages/about-us/about-us';
import { LegalTermsPage } from '../pages/legal-terms/legal-terms';
import { FaqPage } from '../pages/faq/faq';
import { SettingsPage } from '../pages/settings/settings';
import { SharePage } from '../pages/share/share';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  token:any='';
  useData:any='';
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, image:any,isdisable:boolean}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.token = localStorage.getItem('getaPermitToken');
    this.useData = localStorage.getItem('useData');
    if(this.token && this.useData)
    {
     // localStorage.setItem('networkIssue','false');
      this.rootPage = HomePage;

    }


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: HomePage,image: "assets/icon/home.png",isdisable:false },
      { title: 'Add Detail', component: AddDetailPage ,image: "assets/icon/add.png",isdisable:false},
      { title: 'Secure List ', component: ListPage ,image: "assets/icon/list.png",isdisable:false},
      { title: 'Change Password', component: ChangePasswordPage ,image: "assets/icon/change_password.png",isdisable:false},
      { title: 'Share', component: SharePage ,image: "assets/icon/share.png",isdisable:false},
      { title: 'Contact Us', component: ContactUsPage ,image: "assets/icon/contactus.png",isdisable:false},
      { title: 'About Us', component: AboutUsPage ,image: "assets/icon/aboutus.png",isdisable:false},
      { title: 'Legal Terms', component: LegalTermsPage ,image: "assets/icon/legal.png",isdisable:false},
      { title: 'FAQ', component: FaqPage ,image: "assets/icon/faq.png",isdisable:false},
      { title: 'Settings', component: SettingsPage ,image: "assets/icon/settings.png",isdisable:false},
      ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);

  }
}
