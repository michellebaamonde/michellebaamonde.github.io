import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { ParamsService } from '../../service/params.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentRoute: string = '';

  headerItems = ['work', 'about', 'resume']

  constructor(
    private router: Router,
    private paramsService: ParamsService,
    private location: Location
  ){
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.currentRoute = event.urlAfterRedirects.split('/')[1] || '';
      }
    });
  }

  goTo(url): void {
    if(url === 'resume'){
      window.open('assets/Michelle Baamonde Resume.pdf')
    }
    else {
      if(url === 'work'){
        this.paramsService.setWork();
      }
      this.router.navigate([url]);
    }
  }
}
