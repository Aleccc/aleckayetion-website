// import { animate, style, transition, trigger } from '@angular/animations';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-offered',
  templateUrl: './services-offered.component.html',
  styleUrls: ['./services-offered.component.scss'],
  animations: [
    trigger('LeftToRight', [
      transition(':enter', [  
        style({opacity: 0, transform: 'translateX(-25%)'}),
        animate('1.2s 600ms ease-in-out')
      ]),
    ]),
    trigger('RightToLeft', [
      transition(':enter', [  
        style({opacity: 0, transform: 'translateX(25%)'}),
        animate('1.2s 600ms ease-in-out')
      ]),
    ])
   ]
})
export class ServicesOfferedComponent implements OnInit {

  isVisible = false;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    const element = this.elementRef.nativeElement;
    if(element.offsetParent !== null) {
      // element is visible
      this.isVisible = true;
    }
  }
}
