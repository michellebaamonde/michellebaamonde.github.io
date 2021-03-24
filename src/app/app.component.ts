import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
    private title: Title,
  ){
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        window.scrollTo(0, 0);
      }
    });
    this.title.setTitle("Michelle Baamonde Portfolio");
  }
}
