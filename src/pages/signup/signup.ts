import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [AuthServiceProvider]
})
export class SignupPage {

  newcreds= {name: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public AuthServiceProvider: AuthServiceProvider,  private alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  register(user){

      this.AuthServiceProvider.adduser(user).then((data) => {
        if(data) {
          var alert = this.alertCtrl.create({
            title: 'Success',
            subTitle: 'User created',
            buttons: ['ok']
          });
          alert.present();
        }
      });

  }

}
