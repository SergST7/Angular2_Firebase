/**
 * Created by SergST on 24.03.2017.
 */

import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ListListingComponent} from "./components/list-listing/list-listing.component";
import {AddListingComponent} from "./components/add-listing/add-listing.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'listings', component: ListListingComponent},
  {path: 'add-listings', component: AddListingComponent},
];

export const AppRouting = RouterModule.forRoot(routes);