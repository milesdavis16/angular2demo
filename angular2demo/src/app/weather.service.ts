import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class WeatherService {

  apiUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  apiKey = '5ce0e7c5518f89712acdf6b8c9baafe3';

  constructor(public http: Http) { }



  search(query: string) {

    let params: string = [`q=${query}`, `appid=${this.apiKey}`, 'units=imperial'].join('&');
    let queryUrl: string = `${this.apiUrl}?${params}`;
    //queryUrl = 'http://date.jsontest.com/';

    let resp = this.http.get(queryUrl).map( res => res.json() );

    return resp;
      //.map((response: Response) => {
      //  return (<any>response.json()).items.map(item => {
      //     console.log("raw item", item); // uncomment if you want to debug
      //    return item;
          //return new SearchResult({
          //  id: item.id.videoId,
          //  title: item.snippet.title,
          //  description: item.snippet.description, thumbnailUrl: item.snippet.thumbnails.high.url
          //});
      //  });
      //});
  }

}
