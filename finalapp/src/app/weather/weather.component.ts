import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

class WeatherForecast{
  date: string;
  temperature: string;

  constructor(obj?: any) {
    this.date
    this.temperature
  }
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  title = 'weather app works!';
  searchQuery = '';
  weather : string;
  weatherForecast : WeatherForecast;
  weatherForecasts :Array<WeatherForecast>;
  temps : Array<any>;
  dates : Array<any>;
  city : string;
  country : string;

  options: Object;
  weekDay = {'0':'Sun','1':'Mon','2':'Tues','3':'Wed','4':'Thurs','5':'Fri','6':'Sat'};

  constructor(public weatherService: WeatherService, public http: Http) {
    this.weatherForecasts = new Array<WeatherForecast>();

    this.temps = new Array<any>();
    this.dates = new Array<any>();


    this.options = {
      title : { text : '' },
      //yAxis: { title: { text: 'Temperature (Fahrenheit)' } },
      //series: [{
      //  data: [29.9, 71.5, 106.4, 129.2],
      //}]
    };
  }

  ngOnInit() {
  }

  searchCall(){
    this.temps = [];
    this.dates = [];

    this.weatherService.search(this.searchQuery).subscribe(
      data => {
        this.weather = JSON.stringify(data);
        console.log(data);
        console.log(data.list);

        this.city = data.city.name;
        this.country = data.city.country;

        data.list.map( item => {
          console.log(item);
          let wf : WeatherForecast = new WeatherForecast();
          wf.date = item.dt_txt;
          wf.temperature = item.main.temp;
          this.weatherForecasts.push(wf);
          this.temps.push(item.main.temp);

          var d = new Date(item.dt_txt);
          var n = d.getDay();
          this.dates.push(this.weekDay[n] + " " + item.dt_txt);
        });

      },
      error => alert(error),
      () => { console.log("Finished"); this.printResult(); }
    );

  }

  printResult() {
    console.log("Print Result: ");
    //console.log(this.weather);
    console.log(this.weatherForecasts);
    console.log("length:", this.weatherForecasts.length);
    for (var i = 0; i < this.weatherForecasts.length; i++) {

      let summaryData : WeatherForecast = this.weatherForecasts[i];
      console.log("Date: ", summaryData.date, "Temp: ", summaryData.temperature);
    }

    this.options = {
      title : { text : '5 Day Weather Forecast for '+ this.city + ', ' + this.country },
      xAxis: { categories: this.dates },
      yAxis: { title: { text: 'Temperature (Fahrenheit)' } },
      series: [{
        data: this.temps,
      }]
    };
  }


}
