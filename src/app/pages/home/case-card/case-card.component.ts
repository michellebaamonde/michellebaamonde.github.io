import { Component, Input, HostBinding, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'case-card',
  templateUrl: './case-card.component.html',
  styleUrls: ['./case-card.component.scss']
})
export class CaseCardComponent {
  @HostBinding('style.flex-basis') flexBasis = '48%';
  @Input() fullWidth: boolean = false;
  @Input() imgPath: string = '';
  @Input() caseUrl: string = '/about';
  @Input() name: string = 'name here';
  @Input() description: string = 'description';
  @Input() caption: string = 'caption';

  constructor(
    private router: Router,
  ){}

  ngOnChanges(changes) {
    if(this.fullWidth){
      this.flexBasis = '100%';
    }
  }

  goToCase(e): void {
    this.router.navigate([this.caseUrl]);
  }
}
