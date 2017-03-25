import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";

interface Listing{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
}

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire, ) { }

  getListings(){
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>;
    return this.listings
  }
}


