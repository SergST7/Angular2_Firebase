import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
  id: string;
  title: any;
  city: any;
  owner: any;
  bedrooms: any;
  type: any;
  price: any;

  constructor(
    private fbService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.fbService.getListingDetail(this.id).subscribe(item => {
        this.title = item.title;
        this.city = item.city;
        this.owner = item.owner;
        this.bedrooms = item.bedrooms;
        this.type = item.type;
        this.price = item.price;
    })
  }

  onEditSubmit(){
    let listing = {
      title: this.title,
      city:this.city,
      owner: this.owner,
      bedrooms: this.bedrooms,
      type: this.type,
      price: this.price
    }

    this.fbService.updateListing(this.id, listing);

    this.router.navigate(['/listings'])
  }



}
