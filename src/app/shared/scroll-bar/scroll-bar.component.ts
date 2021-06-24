import { Component, HostListener, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scroll-bar',
  templateUrl: './scroll-bar.component.html',
  styleUrls: ['./scroll-bar.component.scss']
})
export class ScrollBarComponent implements OnInit {
  @ViewChild('progressbar') progressbar:ElementRef;
  @ViewChild('scrollPath') scrollPath:ElementRef;
  
  @HostListener('window:scroll', ['$event']) 

  scrollHandler(event) {
   
     let totalHeight = document.body.scrollHeight - window.innerHeight;
     let progressHeight = (window.pageYOffset / totalHeight) * 50;
     this.progressbar.nativeElement.style.height = progressHeight + "%";

    if(this.progressbar.nativeElement.getBoundingClientRect().bottom > this.scrollPath.nativeElement.getBoundingClientRect().bottom){
      console.log('duuuzo')
      this.progressbar.nativeElement.style.height = '40%'
  
    }
      
    }
  constructor() { }

  ngOnInit(): void {
  }

}
