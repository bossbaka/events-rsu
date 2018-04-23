import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user'
import { HomePage } from '../../pages/home/home'

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  credentials: any = {
      name: '',
      email: '',
      password: ''
  }
  constructor(public navCtrl: NavController,
      public loadingCtrl: LoadingController,
      public navParams: NavParams,
      public toastCtrl: ToastController,
      public userProvider: UserProvider) {}

  register() {
      var toaster = this.toastCtrl.create({
          duration: 3000,
          position: 'bottom'
      });
      if (this.credentials.email == '' || this.credentials.password == '' || this.credentials.name == '') {
          toaster.setMessage('All fields are required');
          toaster.present();
      } else if (this.credentials.password.length < 7) {
          toaster.setMessage('Password is not strong. Try giving more than six characters');
          toaster.present();
      } else {
          let loader = this.loadingCtrl.create({
              content: 'Please wait'
          });
          loader.present();
          this.userProvider.register(this.credentials).then((res: any) => {
              loader.dismiss();
              localStorage.setItem("isLogin", "true");
              this.navCtrl.setRoot(HomePage);
          }).catch((err) => {
              loader.dismiss();
              alert(err.message);
          })
      }
  }
}
