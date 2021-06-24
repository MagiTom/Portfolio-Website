
import { AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-two-colums-layout',
  templateUrl: './two-colums-layout.component.html',
  styleUrls: ['./two-colums-layout.component.scss']
})
export class TwoColumsLayoutComponent implements AfterViewInit{

  @ViewChild('content1', {static:false}) content1:ElementRef;
  @ViewChild('col1', {static:false}) col1:ElementRef;
  @Input() content2:HTMLElement;

  @HostListener('window:scroll', ['$event']) 

    scrollHandler(event) {
    
      if( document.body.scrollTop + 50 > this.content2.getBoundingClientRect().top){
        this.content1.nativeElement.classList.remove('stay')
        this.content1.nativeElement.classList.add('move')
      } else{
        this.content1.nativeElement.classList.remove('move')
        this.content1.nativeElement.classList.remove('stay')
      }
      
      if( this.content1.nativeElement.getBoundingClientRect().bottom > this.content2.getBoundingClientRect().bottom + 50){
        this.content1.nativeElement.classList.remove('move');
        this.content1.nativeElement.classList.add('stay');
      }

      if(this.content1.nativeElement.clientHeight > window.innerHeight){
        this.content1.nativeElement.classList.remove('move');
        this.content1.nativeElement.classList.remove('stay'); 
        
      this.col1.nativeElement.style.height = this.content1.nativeElement.clientHeight + 'px'; 
      
      }
     
    }

  constructor() {
  
   }

ngAfterViewInit(){
  this.content1.nativeElement.classList.remove('stay');
  console.log( this.col1.nativeElement.clientHeight)
}

}
