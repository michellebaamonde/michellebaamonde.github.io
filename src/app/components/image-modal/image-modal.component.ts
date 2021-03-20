import { Component, Inject, ViewChild, ElementRef  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fromEvent, Observable, Subscription } from "rxjs";

export interface DialogData {
  imgUrl: string;
}

@Component({
  selector: 'image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent {
  @ViewChild('image') image: ElementRef;
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngAfterViewInit(){
    this.resizeImage();
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe((event) => {
      this.resizeImage();
    })
  }

  resizeImage() {
    this.image.nativeElement.style.top = ((window.innerHeight - this.image.nativeElement.height) / 2) + 'px';
    this.image.nativeElement.style.left = ((window.innerWidth - this.image.nativeElement.width) / 2) + 'px';
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }
}
