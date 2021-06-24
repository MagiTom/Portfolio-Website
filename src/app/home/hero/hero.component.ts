import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { movingBar } from 'src/app/shared/moving-bar/moving-bar.component';
import { fadeInUp, fromOpacity, stretchSquare, textStateTrigger } from '../animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    textStateTrigger,
    fromOpacity,
    fadeInUp,
    stretchSquare
  ]
})
export class HeroComponent implements AfterViewChecked {

  media:movingBar[] = [
    {info: 'github', link: 'https://github.com/MagiTom'},
    {info: 'codepen', link: 'https://codepen.io/MadlenTom/pens/'},
    {info: 'linkedin', link: 'https://www.linkedin.com/in/magdalena-tomala-747776215/'},
    {info: 'github', link: 'https://github.com/MagiTom'},
    {info: 'facebook', link: 'https://www.facebook.com/profile.php?id=100001008579738'},
  ];

  text:string = 'front-end';
  words:string[] = Array.from(this.text);

  startAnimation:boolean=false;
  loader:boolean=false;

  constructor() { }

  ngAfterViewChecked(): void {
 
  setTimeout(()=> {
    this.startAnimation = true;
}, 500);
  console.log(this.startAnimation)
  }

}
