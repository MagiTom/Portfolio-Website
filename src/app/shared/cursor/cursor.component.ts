import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnInit, OnDestroy {
  private unlistener: () => void;
  @ViewChild('cursor') cursor:ElementRef;
  constructor(private renderer2: Renderer2) { }

 xMousePos:number = 0;
yMousePos:number = 0;
lastScrolledLeft:number = 0;
 lastScrolledTop:number = 0;
listener;

  ngOnInit(): void {
    this.unlistener = this.renderer2.listen("document", "mousemove", event => {
      this.moveCircle(event);
    });

    this.listener = this.renderer2.listen('window', 'scroll', (e) => {
      if(this.lastScrolledLeft != document.body.scrollLeft){
        this.xMousePos -= this.lastScrolledLeft;
        this.lastScrolledLeft = document.body.scrollLeft;
        this.xMousePos += this.lastScrolledLeft;
    }
    if(this.lastScrolledTop != document.body.scrollTop){
        this.yMousePos -= this.lastScrolledTop;
        this.lastScrolledTop = document.body.scrollTop;
        this.yMousePos += this.lastScrolledTop;
    }
    window.status = "x = " + this.xMousePos + " y = " + this.yMousePos;

    });
  }

  moveCircle(event){

    this.xMousePos = event.pageX;
    this.yMousePos = event.pageY;
    window.status = "x = " + this.xMousePos + " y = " + this.yMousePos;

     this.cursor.nativeElement.style.left =  this.xMousePos + "px";
    this.cursor.nativeElement.style.top =   this.yMousePos + "px";
  }

  ngOnDestroy() {
    this.unlistener();
    this.listener();
  }

}
