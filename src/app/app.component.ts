import { Component } from '@angular/core';
import { NavigationEnd, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent, RouterOutlet } from '@angular/router';
import { routeFadeStateTrigger, routeSlideStateTrigger } from './shared/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    routeSlideStateTrigger,
    routeFadeStateTrigger
  ]
})
export class AppComponent {
  title = 'Portfolio';
  loading: boolean;
 
  constructor(private router: Router){
    this.loading = false;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
         window.scrollTo(0,0);
      }

      if (event instanceof RouteConfigLoadStart) {
        this.loading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        setTimeout(() => {
          this.loading = false;
        }, 500);
    
      }
   });
  }

}
