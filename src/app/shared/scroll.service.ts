import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private topOfElement:number;
  private screenPostion:number;
 

  constructor() { 

  }


  observePosition(element:HTMLElement, classN:string){

    this.topOfElement = element.getBoundingClientRect().top;
    this.screenPostion = window.innerHeight/1.3;

    if(this.topOfElement < this.screenPostion){
     element.classList.add(classN);
    }else{
      element.classList.remove(classN);
    }
  }


}
