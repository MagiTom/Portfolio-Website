import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { fadeInUp, fromLeft, fromOpacity, skillsStateTrigger } from 'src/app/home/animations';
import { Card, websites, apps, games } from '../projects';

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.scss'],
  animations: [
    fadeInUp,
    skillsStateTrigger,
    fromLeft,
    fromOpacity
  ]
})

export class ProjectsViewComponent implements AfterViewInit {

  @ViewChild('webs') webs: ElementRef;
  @ViewChild('websApps') websApps: ElementRef;
  @ViewChild('websGames') websGames: ElementRef;

  public currentActive = 0;
  public websOffset: Number = null;
  public websAppsOffset: Number = null;
  public websGamesOffset: Number = null;
  startAnimation:boolean=false;

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    if (window.pageYOffset >= this.websOffset && window.pageYOffset < this.websAppsOffset) {
      this.currentActive = 1;
    } else if (window.pageYOffset >= this.websAppsOffset && window.pageYOffset < this.websGamesOffset) {
      this.currentActive = 2;
    } else if (window.pageYOffset >= this.websGamesOffset) {
      this.currentActive = 3;
    } else {
      this.currentActive = 0;
    }
  }
 

  websites: Card[] = websites;
  apps: Card[] = apps;
  games: Card[] = games;

  constructor() { }

  ngAfterViewInit() {
    this.websOffset = this.webs.nativeElement.offsetTop;
    this.websAppsOffset = this.websApps.nativeElement.offsetTop;
    this.websGamesOffset = this.websGames.nativeElement.offsetTop;

    setTimeout(()=> {
      this.startAnimation = true;
  }, 500);
    console.log(this.startAnimation)
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

}
