import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { skillsStateTrigger } from '../animations';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  animations: [
    skillsStateTrigger,
  ]
})
export class BoardComponent implements AfterViewInit{

  @Input() skills: string[];

  @ViewChild('b',  {read: ElementRef}) b: ElementRef;
  intersection:boolean = false;

 
  constructor() { }

  ngAfterViewInit(){
 this.lazyLoad()
  }

  lazyLoad() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return
        }else {
          this.intersection = true;
          observer.unobserve(entry.target);
         
        }
      });
    }, options);
    observer.observe(this.b.nativeElement);
  }
}
