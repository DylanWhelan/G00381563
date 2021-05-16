import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectCreditsPageRoutingModule } from './project-credits-routing.module';

import { ProjectCreditsPage } from './project-credits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectCreditsPageRoutingModule
  ],
  declarations: [ProjectCreditsPage]
})
export class ProjectCreditsPageModule {}
