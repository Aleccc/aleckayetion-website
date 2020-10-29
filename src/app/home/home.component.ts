import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
