import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from "angularfire2";

import {AppRouting} from "./app.routing";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingComponent } from './components/listing/listing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { ListListingComponent } from './components/list-listing/list-listing.component';


export const fbConfig = {
  apiKey: "AIzaSyBq8h1b0GlLcVstcOr0IdBfrXj4bek5OmQ",
  authDomain: "property-listing-c4d57.firebaseapp.com",
  databaseURL: "https://property-listing-c4d57.firebaseio.com",
  storageBucket: "property-listing-c4d57.appspot.com",
  messagingSenderId: "484585922588"
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingComponent,
    NavbarComponent,
    AddListingComponent,
    EditListingComponent,
    ListListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    AngularFireModule.initializeApp(fbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
