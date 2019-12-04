import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  review = [];
  song = [];
  avgRating = [];

  songID;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.review = [];
    this.fetchReviews();
  }




  addRating(){
    var Track = (<HTMLInputElement>document.getElementById("Track")).value;
    var Person = (<HTMLInputElement>document.getElementById("Person")).value;
    var Rating = (<HTMLInputElement>document.getElementById("Rating")).value;
    var Review = (<HTMLInputElement>document.getElementById("Review")).value;


    var uri = 'http://localhost:1234';

    //defines http & opens post request
    const http = new XMLHttpRequest();
    http.open("POST", uri+'/Music/addRating/:id')
  
    let body = new URLSearchParams();

    //appends new song to body of the request
    body.append("Track", Track);
    body.append("Person", Person);
    body.append("Rating", Rating);
    body.append("Review", Review);

    //sends http response
    http.send(body);
  }

  fetchReviews() {
    var uri = 'http://localhost:1234';
    
    //routes to server to get all reviews
    this.http.get(uri +'/Music/Reviews/:id'+ this.songID).subscribe((data) => {
      Object.values(data).forEach(element => {
        Object.values(element).forEach(item => {
          this.review.push({
            Track: item["Track"],
            Person: item["Person"],
            Rating: item["Rating"],
            Review: item["Review"], 
          })
        })
        console.log(this.review);
      });
    })
  }
  getAvg(id){
    var uri = 'http://localhost:1234';

    this.http.get(uri +'/Music/AverageRating/'+ id).subscribe((data) => {
      Object.values(data).forEach(element => {
        Object.values(element).forEach(item => {
          this.avgRating.push({
            avgRating: item["avgRating"],
          })
        })
        console.log(this.avgRating);
      });
    })
  }

}
