import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController,
  //AlertController
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
  qrData = null;
  createdCode = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing,
    //public alertCtrl: AlertController,
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
          text: "Cancel",
          role: "destructive"
        }
      ]
    });
    shareActionSheet.present();
  }


  // createCode(qrData){
  //   let alert = this.alertCtrl.create({
  //     title: 'กรอกข้อมูล',
  //     inputs: [
  //       {
  //         name: 'qrData',
  //         placeholder: 'รหัสนักศึกษา',
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'ยกเลิก',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Canceled');
  //         }
  //       },
  //       {
  //         text: 'ยืนยัน',
  //         handler: () => {
  //           this.createdCode = this.qrData;
  //           console.log('Logined!');
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }

  createCode() {
    this.createdCode = this.qrData;
  }


}
