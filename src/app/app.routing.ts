/**
 * Created by SergST on 24.03.2017.
 */

import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ListListingComponent} from "./components/list-listing/list-listing.component";
import {AddListingComponent} from "./components/add-listing/add-listing.component";
import {ListingComponent} from "./components/listing/listing.component";
import {EditListingComponent} from "./components/edit-listing/edit-listing.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'listings', component: ListListingComponent},
  {path: 'listing/:id', component: ListingComponent},
  {path: 'edit-listing/:id', component: EditListingComponent},
  {path: 'add-listing', component: AddListingComponent},
];

export const AppRouting = RouterModule.forRoot(routes);