import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  id: any;
  listing: any;

  constructor(private route: ActivatedRoute,
              private fbService: FirebaseService) { }

  ngOnInit() {
    //get Id from url
    this.id = this.route.snapshot.params['id'];

    //get item
    this.fbService.getListingDetail(this.id).subscribe(item => {
      this.listing = item;
      // console.log(item)
    })

  }
}
