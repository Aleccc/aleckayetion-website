import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavLink } from '../enums/nav-link.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit {

  @Output() activeNavLink = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setActiveLink(): void {
    this.activeNavLink.emit(NavLink.Home.toString());
  }

}
