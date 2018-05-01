import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UserpagePage } from '../userpage/userpage';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AuthServiceProvider]
})
export class HomePage {
  responseData: any;
  usercreds= {'name': '', 'password': ''};


  constructor(public navCtrl: NavController, public AuthServiceProvider: AuthServiceProvider) {}


  login(user){

      this.AuthServiceProvider.authenticate(user).then(data => {
        if(data) {
          this.navCtrl.push(UserpagePage);
        }
      });

  }

signup(){
  this.navCtrl.push(SignupPage);
}
/*  signup(){
    this.AuthServiceProvider.postData(this.usercreds, "adduser").then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('usercreds', JSON.stringify(this.responseData));
    });
  } */

}
