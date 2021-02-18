import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewService } from '../../shared/services/review.service';
import { Review } from '../../shared/Models/review';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  postNewReview: boolean
  reviewsData: any;
  constructor(private reviewService: ReviewService) {

  }

  ngOnInit() {
    this.postNewReview = false;
    var test = this.reviewService.getReviews().subscribe(data => {
      this.reviewsData = data;
    });
  }

  NewReview(): void {
    this.postNewReview = !this.postNewReview;
  }

}
