import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadmaplistComponent } from './roadmaps/roadmaplist/roadmaplist.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: "roadmaps", component: RoadmaplistComponent },
  { path: "dashboard", component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
