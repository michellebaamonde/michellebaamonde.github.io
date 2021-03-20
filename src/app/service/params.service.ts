import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParamsService {
  private work$: Subject<any> = new Subject<any>();

  constructor() { }

  getWorkObs() {
    return this.work$;
  }

  setWork() {
    setTimeout(() => this.work$.next())
  }
}
