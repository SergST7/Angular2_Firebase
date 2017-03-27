import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import * as firebase from 'firebase'


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
  listing: FirebaseObjectObservable<any>;
  folder: any;

  constructor(private af: AngularFire, ) {
    this.folder = 'listing-images'
  }

  getListings(){
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>;
    return this.listings
  }

  getListingDetail(id){
    this.listing = this.af.database.object('/listings/'+id) as FirebaseObjectObservable<Listing>;
    return this.listing
  }

  addListing(listing){
    //create ref for firebase storage
    let storageRef = firebase.storage().ref();
    for(let fileSelected of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${fileSelected.name}`;
      let imageRef = storageRef.child(path);
      imageRef.put(fileSelected).then(snapshot => {
        listing.image = fileSelected.name;
        listing.path = path;

        return this.listings.push(listing)
      })
    }
  }
}


