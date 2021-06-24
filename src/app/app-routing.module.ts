import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home/home-view/home-view.component';

const routes: Routes = [
  {path: 'about', loadChildren: () => import('./about/about.module').then(m=> m.AboutModule)},
  {path: 'projects', loadChildren: () => import('./projects/projects.module').then(m=> m.ProjectsModule)},
  {path: '', component: HomeViewComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
