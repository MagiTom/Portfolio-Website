import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeInUp } from 'src/app/home/animations';
import { movingBar } from 'src/app/shared/moving-bar/moving-bar.component';
import { Card, websites, apps, games } from '../projects';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  animations: [
    fadeInUp,
  ]
})
export class ProjectDetailsComponent implements OnInit, AfterViewChecked {

  project:Card;
  projects:Card[][] = [];
  header:movingBar[] = [
    {info: 'choosen', link: ''},
    {info: 'projects', link: ''},
    {info: 'choosen', link: ''},
    {info: 'projects', link: ''},
    {info: 'choosen', link: ''},
    {info: 'projects', link: ''},
  ];

  startAnimation:boolean=false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

  const routeParams = this.route.snapshot.paramMap;
  const projectIdFromRoute = Number(routeParams.get('projectId'));
  this.projects.push(websites, apps, games);
  const flattenArr = this.projects.reduce((accumulator, value) => accumulator.concat(value), []);
  this.project = flattenArr.find(project => project.id === projectIdFromRoute);

  }

  ngAfterViewChecked(): void {
 
    setTimeout(()=> {
      this.startAnimation = true;
  }, 500);
    }

}
