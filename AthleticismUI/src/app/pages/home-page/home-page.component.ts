import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  errorMessage: string
  inputModel: any;
  restItems: any;  
  result$: Observable<any>;
  private readonly  apiURL = 'https://localhost:5001/api/v1';


  constructor(private http: HttpClient) {
    this.result$ = this.resolveItems();
  }

  ngOnInit() {
    // this.getRestItems();
    // console.log(this.restItems);
    // this.getCustomerById(1);
    // this.result$ = this.resolveItems();

    this.http.get<any>('https://localhost:5001/api/v1/Review').subscribe({
      next: data => {
          this.restItems = data;
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
    })
  }

  // Read all REST Items
  getRestItems() {
    // return this.http
    //   .get<any[]>(this.restItemsUrl,{observe:'response'})
    //   .pipe(tap(data => data));
  } 
  
  getCustomerById(id: number){
    var test = this.http.get(`${this.apiURL}/Review/${id}`);
    return test;
  }

  // URL which returns list of JSON items (API end-point URL)
  

  // create a method named: resolveItems()
  // this method returns list-of-items in form of Observable
  // every HTTTP call returns Observable object
  resolveItems(): Observable<any> {
    console.log('Request is sent!');
    // this.http is a HttpClient library provide by @angular/common
    // we are calling .get() method over this.http object
    // this .get() method takes URL to call API
    // return this.http.get(`${this.apiURL}/Review`);
    // return this.http.get('https://localhost:5001/api/v1/Review').toPromise().then(res=> {
    //   console.log(res.json();
    //   resolve(););
    // });

    var promise = new Promise((resolve, reject) => {
      var api = 'https://localhost:5001/api/v1/Review';
      this.http.get(api)
        .toPromise()
        .then(
          res => { // Success
            var test = res;
            resolve();
          }
        );
    });
    // return promise;

    return this.http.get('https://localhost:5001/api/v1/Review');
    
  }

  resolveItemss(){
    console.log('Request is sent!');
    // return this.http.get<JSONObject>('https://localhost:5001/api/v1/Review');    
  }

}
