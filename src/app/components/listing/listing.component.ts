import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //get Id from url
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
  }

}
