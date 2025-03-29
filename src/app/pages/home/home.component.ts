import { Component, ViewChild, ElementRef } from '@angular/core';
import { ParamsService } from '../../service/params.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild("work") workEl: ElementRef;

  caseStudies = [
    {
      name: 'Discount Tire Desktop POS',
      description: 'Redesigning the desktop application used by employees in 1,200+ stores across the US to help them provide services to customers.',
      caption: 'UX + UI DESIGN',
      caseUrl: 'dt-desktop',
      imgPath: 'dt-desktop',
      fullWidth: false
    },
    {
      name: 'Uncover More',
      description: 'A mobile app that helps New Yorkers discover new experiences in the city.',
      caption: 'UX + UI DESIGN, RESEARCH',
      caseUrl: 'uncover-more',
      imgPath: 'uncovermore',
      fullWidth: false
    },
    // {
    //   name: 'Pup 101',
    //   description: 'A mobile app for new dog parents to prepare them for their puppy’s arrival.',
    //   caption: 'UX + UI DESIGN, RESEARCH, BRANDING',
    //   caseUrl: 'pup-101',
    //   imgPath: 'pup101',
    //   fullWidth: false
    // },
    // {
    //   name: 'Spotify',
    //   description: 'Adding a new social feature to the popular music streaming app.',
    //   caption: 'UX + UI DESIGN, RESEARCH',
    //   caseUrl: 'spotify',
    //   imgPath: 'spotify',
    //   fullWidth: false
    // },
    // {
    //   name: 'ClearSky',
    //   description: 'Responsive, mobile-first website that offers a transparent flight booking process.',
    //   caption: 'UX + UI DESIGN, RESEARCH, BRANDING',
    //   caseUrl: 'clearsky',
    //   imgPath: 'clearsky',
    //   fullWidth: false
    // },
    // {
    //   name: 'Pocket',
    //   description: 'Responsive e-commerce website and brand refresh that provides a straightforward shopping experience.',
    //   caption: 'UX + UI DESIGN, RESEARCH, BRANDING',
    //   caseUrl: 'pocket',
    //   imgPath: 'pocket',
    //   fullWidth: false
    // },
  ]

  constructor(private paramsService: ParamsService) {}

  ngAfterViewInit() {
    this.paramsService.getWorkObs().subscribe(() => {
      this.onWorkClick(null);
    })
  }

  onWorkClick(e): void {
    this.workEl.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  onInTouchClick(e): void {

  }
}
