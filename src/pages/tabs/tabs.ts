import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { AboutPage } from "../about/about";
import { ContactPage } from "../contact/contact";
import { HomePage } from "../home/home";
import { LoginPage } from "../login/login";

import { AuthProvider } from "../../providers/auth/auth";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  /**
   * Define 1st Tab's rootPage value
   */
  tab1Root = HomePage;

  /**
   * Define 2nd Tab's rootPage value
   */
  tab2Root = AboutPage;

  /**
   * Define 3rd Tab's rootPage value
   */
  tab3Root = ContactPage;

  constructor(private _NAV: NavController, private _AUTH: AuthProvider) {}

  /**
   * Log out from Firebase/set the rootPage value to
   * the LoginPage component
   * @method logOut
   * @return {none}
   */
  logOut(): void {
    this._AUTH
      .logOut()
      .then((data: any) => {
        this._NAV.setRoot(LoginPage);
      })
      .catch((error: any) => {
        console.dir(error);
      });
  }
}
