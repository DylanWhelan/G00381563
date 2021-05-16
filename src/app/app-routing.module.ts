import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'country-selection',
    loadChildren: () => import('./country-selection/country-selection.module').then( m => m.CountrySelectionPageModule)
  },
  {
    path: 'country-information',
    loadChildren: () => import('./country-information/country-information.module').then( m => m.CountryInformationPageModule)
  },
  {
    path: 'project-credits',
    loadChildren: () => import('./project-credits/project-credits.module').then( m => m.ProjectCreditsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
