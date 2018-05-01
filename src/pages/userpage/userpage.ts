import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
/**
 * Generated class for the UserpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userpage',
  templateUrl: 'userpage.html',
  providers: [AuthServiceProvider]
})
export class UserpagePage {



  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserpagePage');
  }
  logout(){
    this.authServiceProvider.logout();
    this.navCtrl.setRoot(HomePage);
  }
  getinfo(){
    this.authServiceProvider.getinfo().then(data =>{
      if(data => data.success){
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
