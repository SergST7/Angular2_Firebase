import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-list-listing',
  templateUrl: './list-listing.component.html',
  styleUrls: ['./list-listing.component.css']
})
export class ListListingComponent implements OnInit {
  listings:any;

  constructor(private fireBaseService: FirebaseService)  { }

  ngOnInit() {
    this.fireBaseService.getListings().subscribe(data => {
      this.listings = data
    })
  }

}
