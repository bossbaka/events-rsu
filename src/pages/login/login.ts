import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController } from "ionic-angular";
//import { HomePage } from '../../pages/home/home'
import { AuthProvider } from '../../providers/auth/auth'
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  credentials: any = {
    email: "",
    password: ""
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public authProvider: AuthProvider
  ) {}

  ionViewDidLoad() {
    if (localStorage.getItem("isLogin") == "true") {
      this.navCtrl.setRoot(TabsPage);
    }
  }
  login() {
    this.authProvider
      .login(this.credentials)
      .then((res: any) => {
        this.navCtrl.setRoot(TabsPage);
      })
      .catch(err => {
        alert(err.message);
      });
  }
  register() {
    this.navCtrl.push("RegisterPage");
  }
}
