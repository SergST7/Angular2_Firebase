import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  title: any;
  city: any;
  owner: any;
  bedrooms: any;
  type: any;
  image: any;
  price: any;

  constructor(
    private fbService:FirebaseService,
    private route:Router ) { }

  ngOnInit() {
  }

  onSubmit(){
    let listing = {
      title: this.title,
      city:this.city,
      owner: this.owner,
      bedrooms: this.bedrooms,
      type: this.type,
      price: this.price
    }

    this.fbService.addListing(listing);
    this.route.navigate(['/listings'])
  }

}
