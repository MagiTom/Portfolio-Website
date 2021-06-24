import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsViewComponent } from './projects-view/projects-view.component';

const routes: Routes = [

    {path: '', component: ProjectsViewComponent},
    {path: ':projectId', component: ProjectDetailsComponent},
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
