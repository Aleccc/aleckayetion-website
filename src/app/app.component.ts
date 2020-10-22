import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { NavLink } from './enums/nav-link.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('FadeIn', [
      transition(':enter', [  
        style({opacity: 0, offset: 1.0}),
        animate('1.2s 600ms ease-in')
      ]),
    ]),
    trigger('AnimateList', [
      transition(':enter', [  
        style({opacity: 0, transform: 'translateX(-75%)', offset: 1.0}),
        animate('1.2s 600ms ease-in')
      ]),
    ])
   ]
})
export class AppComponent {
  title = 'aleckayetion';
  activeNavLink = NavLink.Home.toString();

  @HostListener("window:scroll", []) onWindowScroll() {
    if(this.activeNavLink == null) {
      // element is visible
      this.activeNavLink = NavLink.Home.toString();
    }
  }

}
