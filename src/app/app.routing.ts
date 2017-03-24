/**
 * Created by SergST on 24.03.2017.
 */

import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ListListingComponent} from "./components/list-listing/list-listing.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'listings', component: ListListingComponent},
];

export const AppRouting = RouterModule.forRoot(routes);