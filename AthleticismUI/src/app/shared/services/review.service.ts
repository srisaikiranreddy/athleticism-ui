import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../Models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  data: any;
  private readonly  baseURL = 'https://localhost:5001/api/v1';
  private readonly  reviewURL = `${this.baseURL}/review/`;
  

  constructor(private http: HttpClient) {  }   

  public createReview(review: Review){}

  public updateReview(seview: Review){}

  public deleteReview(id: number){}

  public getReviewById(id: number){
    return this.http.get<Review>(`${this.reviewURL}/${id}`)
     .subscribe(data => {
      this.data = data;
    })
  }

  public getReviews(){
    return this.http.get('https://localhost:5001/api/v1/review/')
     
  }

}
