import { ListDetailPage } from './../pages/list-detail/list-detail';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ScanPage } from '../pages/scan/scan';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserProvider } from '../providers/user/user';

// Import library firbease
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

// import file configurasi yang kita biuat tadi
import { config } from './app.firebaseconfig';
import { AuthProvider } from '../providers/auth/auth';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SocialSharing } from '@ionic-native/social-sharing';



import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AngularFireStorageModule } from 'angularfire2/storage';


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ScanPage,
        ListDetailPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        NgxQRCodeModule,

        // tambahkan module di sini
        AngularFireModule.initializeApp(config),
        AngularFirestoreModule.enablePersistence(),
        AngularFireStorageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ScanPage,
        ListDetailPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        },
        UserProvider,
        //tambahkan auth provider & AngularFireDatabase di sini
        AngularFireAuth,
        AngularFireDatabase,
        AuthProvider,
        BarcodeScanner,
        SocialSharing
    ]
})
export class AppModule {}


