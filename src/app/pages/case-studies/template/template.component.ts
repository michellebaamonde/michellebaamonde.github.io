import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  //1: go to app.module.ts
  //2: add an import for the component at the top
  //3: add the component to the declarations array
  //4: go to app-routing.module.ts
  //5: add an import for the component at the top
  //6: add a new dictionary to the ROUTES array, including the path and component attributes
  //7: in home.component.ts, if this case study has a card, make sure the caseUrl attribute in
  //the caseStudies array matches the url you added to the ROUTES array
}
