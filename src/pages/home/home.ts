import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth'
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";



interface Items {}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  itemsCollection: AngularFirestoreCollection<Items>; //Firestore collection
  items: Observable<Items[]>; // read collection


  constructor(public navCtrl: NavController, public authProvider: AuthProvider, public afs: AngularFirestore) {
    this.getDataFireStore();
  }

  getDataFireStore() {
    this.itemsCollection = this.afs.collection("event");
    this.items = this.itemsCollection.valueChanges();
  }


  logout() {
  	this.authProvider.logout();
  	this.navCtrl.setRoot("LoginPage");
  }
}
