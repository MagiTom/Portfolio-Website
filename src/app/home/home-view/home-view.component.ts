
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ScrollService } from 'src/app/shared/scroll.service';
import { fadeIn, lengthening } from '../animations';
import { SeeComponent } from '../see/see.component';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
  animations:[
    fadeIn,
    lengthening
  ]
})
export class HomeViewComponent implements AfterViewInit, OnInit, OnDestroy {

  @ViewChild('line') line:ElementRef;
  @ViewChild('line2') line2:ElementRef;
  @ViewChild('seeSection') seeSection:SeeComponent;
  seeImg:HTMLElement;
  classNames:string = 'animate'; 
  listener;
  intersection:boolean;
 

  skillsSvg:string[] = [
    '../../../assets/svg/html.svg',
    '../../../assets/svg/css.svg',
    '../../../assets/svg/js.svg',
    '../../../assets/svg/angular.svg',
    '../../../assets/svg/bootstrrap.svg',
    '../../../assets/svg/webpack.svg',
    '../../../assets/svg/saas.svg',
    '../../../assets/svg/git.svg',
    '../../../assets/svg/xd.svg',
    '../../../assets/svg/AI.svg',
    '../../../assets/svg/PS.svg',
    '../../../assets/svg/ts.svg'
  ];

  interestedIn:string[] = [
    '',
    '',
    '',
    '',
    '',
    '../../../assets/svg/node.svg',
    '../../../assets/svg/rxjs.svg',
    '',
    '',
    '',
    '',
    '',
  ]

  constructor(private renderer2: Renderer2, private scrollService: ScrollService) {


   }

  ngAfterViewInit(){
   
    this.seeImg = this.seeSection.image1;
 

    this.listener = this.renderer2.listen('window', 'scroll', (e) => {
      this.scrollService.observePosition(this.line.nativeElement, this.classNames);
      this.scrollService.observePosition(this.line2.nativeElement, this.classNames);
      this.scrollService.observePosition(this.seeImg, this.classNames);

    });
  
  }

ngOnInit(){

}

ngOnDestroy(): void {
  this.listener();
}
  
}
