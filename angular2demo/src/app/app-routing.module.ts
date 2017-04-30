import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {WeatherComponent} from "./weather/weather.component";
import {TwitterComponent} from "./twitter/twitter.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TwitterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'twitter', component: TwitterComponent }
  //{ path: 'contact', component: ContactComponent },
  //{ path: 'contactus', redirectTo: 'contact' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
