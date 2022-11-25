import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TagsComponent} from './tags/tags.component';

const routes: Routes=[
  { path:'tags',component:TagsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports:[ RouterModule]
})

export class AppRoutingModule { }
