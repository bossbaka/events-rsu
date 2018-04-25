import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController
} from "ionic-angular";
import { SocialSharing } from "@ionic-native/social-sharing";

/**
 * Generated class for the ListDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-list-detail",
  templateUrl: "list-detail.html"
})
export class ListDetailPage {
  detail: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing
  ) {
    this.detail = navParams.get("selectedItem");
    console.log(this.detail);
  }

  share(detail) {
    let shareActionSheet = this.actionSheetController.create({
      title: "Share",
      buttons: [
        {
          text: "on Facebook",
          icon: "logo-facebook",
          handler:()=> {
            this.socialSharing.shareViaFacebook(detail.photo, detail.name)
          }
        },
        {
          text: "Share",
          icon: "share"
        },
        {
          text: "Cancel",
          role: "destructive"
        }
      ]
    });
    shareActionSheet.present();
  }
}
