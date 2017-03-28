import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FirebaseService} from "../../services/firebase.service";
import * as firebase from 'firebase';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  id: any;
  listing: any;
  imageUrl: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fbService: FirebaseService) { }

  ngOnInit() {
    //get Id from url
    this.id = this.route.snapshot.params['id'];

    //get item
    this.fbService.getListingDetail(this.id).subscribe(item => {
      this.listing = item;

      //getimage from storage
      //create ref for firebase storage
      let storageRef = firebase.storage().ref();
      let imgRef = storageRef.child(item.path);
      imgRef.getDownloadURL().then(url => {
        this.imageUrl = url
      }).catch(error => console.error(error));
      // console.log(item)
    });
  }

    onDelete(){
      this.fbService.deleteListing(this.id);
      this.router.navigate(['/home'])
    }


}
