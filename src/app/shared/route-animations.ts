import { animate, style, transition, trigger } from '@angular/animations';

export const routeFadeStateTrigger = trigger('routeFadeState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('300ms 300ms')
  ]),
  transition(':leave', animate('300ms 300ms', style({
    opacity: 0
  })))
]);

export const routeSlideStateTrigger = trigger('routeSlideState', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)',
      opacity: 0
    }),
    animate('300ms 300ms')
  ]),
  transition(':leave', animate('300ms 300ms', style({
    transform: 'translateY(100%)',
    opacity: 0
  })))
]);
