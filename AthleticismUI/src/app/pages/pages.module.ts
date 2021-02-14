import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReviewsComponent
  ],
  exports:[
    ReviewsComponent
  ]
})
export class PagesModule { }
