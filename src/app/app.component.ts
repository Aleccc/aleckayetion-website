import { Component, HostListener } from '@angular/core';
import { NavLink } from './enums/nav-link.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
