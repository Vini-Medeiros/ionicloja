import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAgalq9YRghUNG7PPTImKyOc7cMgJB-ORY",
  authDomain: "projeto-b3fe4.firebaseapp.com",
  projectId: "projeto-b3fe4",
  storageBucket: "projeto-b3fe4.appspot.com",
  messagingSenderId: "215823603968",
  appId: "1:215823603968:web:0e8595a8396877929b3be5",
  measurementId: "G-1SWZ1HFF0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}