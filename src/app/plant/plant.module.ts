import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantListComponent } from './plant-list/plant-list.component';

@NgModule({
  exports: [PlantListComponent],
  imports: [
    CommonModule
  ],
  declarations: [PlantListComponent]
})
export class PlantModule { }
