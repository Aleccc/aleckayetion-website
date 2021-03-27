import { Component, HostBinding, HostListener, ViewChild } from '@angular/core';
import { NavLink } from './enums/nav-link.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aleckayetion';
  now = new Date();
  activeNavLink: string = NavLink.Home.toString();
  isCollapsed = true;

  @HostBinding('@.disabled')
  public animationsDisabled = false;

  @ViewChild('home') home;
  @ViewChild('services') services;
  @ViewChild('pricing') pricing;
  @ViewChild('contact') contact;

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior:"smooth"});
    this.isCollapsed = true;
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    const y = window.pageYOffset;
    const sectionServices = this.services.nativeElement.offsetTop
    const sectionPricing = this.pricing.nativeElement.offsetTop
    const sectionContact = this.contact.nativeElement.offsetTop

    if(sectionContact <= y){
      this.activeNavLink = NavLink.Contact.toString();
    } else if(sectionPricing <= y){
      this.activeNavLink = NavLink.Pricing.toString();
    } else if(sectionServices <= y){
      this.activeNavLink = NavLink.Services.toString();
    } else {
      this.activeNavLink = NavLink.Home.toString();
    }
  }

}
