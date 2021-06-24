import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() contact;
  @Input() nav;
  openedNav:boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

 
scrollToElement(el) {
    el.scrollIntoView({behavior: 'smooth'});
  

    // this.router.navigate([], { fragment: this.contact });
    this.openedNav = false;
  }

}
