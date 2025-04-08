import { Routes } from '@angular/router';
import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './parent/child/child.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FunComponent} from './fun/fun.component';
import {AboutComponent} from './about/about.component';

export const routes: Routes = [
  {path: '', redirectTo:'/parent', pathMatch: 'full'},
  {path:'parent', component: ParentComponent,children:[{path:'child', component:ChildComponent}]},
  {path:'about', component: AboutComponent},
  { path: '**', component: PageNotFoundComponent },



  //Default Route
  //A route with path '' is commonly used as the "default" route, which is the route Angular will load when no other route is specified by the user.
];
