import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { NavLink } from '../enums/nav-link.enum';

@Component({
  selector: 'app-services-offered',
  templateUrl: './services-offered.component.html',
  styleUrls: ['./services-offered.component.scss'],
  animations: [
    trigger('FadeIn', [
      transition(':enter', [  
        style({opacity: 0, offset: 1.0}),
        animate('1.2s 600ms ease-in')
      ]),
    ]),
    trigger('LeftToRight', [
      transition(':enter', [  
        style({opacity: 0, transform: 'translateX(-25%)', offset: 1.0}),
        animate('1.2s 600ms ease-in')
      ]),
    ]),
    trigger('BottomToTop', [
      transition(':enter', [  
        style({opacity: 0, transform: 'translateY(25%)', offset: 1.0}),
        animate('1.2s 600ms ease-in')
      ]),
    ]),
    trigger('RightToLeft', [
      transition(':enter', [  
        style({opacity: 0, transform: 'translateX(25%)', offset: 1.0}),
        animate('1.2s 600ms ease-in')
      ]),
    ])
   ]
})
export class ServicesOfferedComponent implements OnInit {

  @Output() activeNavLink = new EventEmitter<string>();
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
      this.activeNavLink.emit(NavLink.Services.toString());
    }
  }
}
