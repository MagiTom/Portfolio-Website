import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";


export const skillsStateTrigger = trigger('listAnimation', [
    transition('* => *', [ 
        // query(':leave', [
        //     stagger(200, [
        //         animate('0.5s', style({ opacity: 0 }))
        //     ])
        // ], { optional: true }),
        query(':enter', [
            style({ opacity: 0 }),
            stagger(200, [
                animate('0.5s', style({ opacity: 1 }))
            ])
        ], { optional: true })
    ])
]);


export const textStateTrigger = trigger('textAnimation', [
    transition('* => *', [ 
        // query(':leave', [
        //     stagger(200, [
        //         animate('0.5s', style({ opacity: 0 }))
        //     ])
        // ], { optional: true }),
        query(':enter', [
            style({color: '#707070'}),
            stagger(200, [
                animate('0.5s', style({
                    color: 'transparent' 
                }))
            ])
        ], { optional: true })
    ])
])

export const fadeIn = trigger('fadeIn', [
    state('up', style({
        opacity: 1,
        bottom: '9%',
    })),
    state('down', style({
        opacity: 1,
        top: '9%',
    })),
    transition('down => up', [
        style({
            opacity: 0,
            bottom: '9%',
        }),
        animate('1s')
    ]),
    transition('up => down', [
        style({
            opacity: 0,
            bottom: '9%',
        }),
        animate('1s')
    ])
]);

export const fadeInUp =  trigger('fadeInUp', [ 
        transition('* => *', [
            style({ opacity: 0, transform: 'translateY(10px)'}), 
            animate('1s ease-out', style({opacity: 1, transform: 'translateY(0)'})),
          ]) 
  ])

  export const fromLeft =  trigger('fromLeft', [ 
    transition(':enter', [
        style({ opacity: 0.2, transform: 'translateX(-100%)'}), 
        animate('1.5s ease-out', style({opacity: 0.5, transform: 'translateX(0)'})),
      ]), 
    // transition(':leave', [
    //     style({ opacity: 0.5, transform: 'translateX(0)'}), 
    //     animate('1.5s ease-out', style({opacity: 0.2, transform: 'translateX(-100%)'})),
    //   ]) 
])
  export const fromOpacity =  trigger('fromOpacity', [ 
    transition(':enter', [
        style({ opacity: 0}), 
        animate('1.5s ease-out', style({opacity: 1})),
      ]), 
    // transition(':leave', [
    //     style({ opacity: 1}), 
    //     animate('1.5s ease-out', style({opacity: 0})),
    //   ]) 
])

export const lengthening = trigger('lengther', [
    state('short', style({
        width: '0%', opacity: 0.2
    })),
    state('long', style({
        width: '20%', opacity: 1
    })),
    transition('short => *', [
        animate('2s'),
    ]),
    transition('long => *', [
        animate('1s'),
      ]), 
])
export const lengthening2 = trigger('lengther2', [
    state('short', style({
        width: '20%', opacity: 0.2
    })),
    state('long', style({
        width: '*', opacity: 1
    })),
    transition('short => *', [
        animate('2s'),
    ]),
    transition('long => *', [
        animate('2s'),
      ]), 
])

export const stretchSquare = trigger('stretchSquare', [ 
    transition('* => *', [
        style({ opacity: 0, width: '20%', height: '20%'}), 
        animate('1s ease-out', style({opacity: 1, width: '*', height: '*'})),
      ]) 
])

export const fadeUp = trigger('fadeUp', [
    state('up', style({
        opacity: 1,
        bottom: '9%',
    })),
    state('down', style({
        opacity: 0,
        top: '9%',
    })),
    transition('down => up', [
        style({
            opacity: 0,
            bottom: '9%',
        }),
        animate('1s')
    ]),
]);

export const fadeBottom = trigger('fadeBottom', [
    state('up', style({
        opacity: 0,
        bottom: '9%',
    })),
    state('down', style({
        opacity: 1,
        top: '9%',
    })),
    transition('up => down', [
        style({
            opacity: 0,
            bottom: '9%',
        }),
        animate('1s')
    ])
]);