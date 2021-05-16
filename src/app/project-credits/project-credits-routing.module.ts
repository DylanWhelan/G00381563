import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectCreditsPage } from './project-credits.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectCreditsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectCreditsPageRoutingModule {}
