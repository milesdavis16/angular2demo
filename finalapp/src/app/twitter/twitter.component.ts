import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  searchQuery = '';
  tweetsdata;

  constructor(private _http: Http) { }

  ngOnInit() {
    this.authorizeCall();
  }

  authorizeCall() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    this._http.post('http://localhost:3000/authorize', { headers : headers })
      .subscribe((res) => { console.log(res); })
  }

  searchCall(){
    var headers = new Headers();
    var searchterm = 'query=' + this.searchQuery;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this._http.post('http://localhost:3000/search', searchterm, {headers: headers}).subscribe((res) => {
      this.tweetsdata = res.json().data.statuses;
      console.log(res.json().data.statuses)
    });
  }

}
