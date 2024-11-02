import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  plants: Plant[] | undefined;
  constructor(private readonly plantService:PlantService) { }

  ngOnInit() {
    this.plantService.getPlants().subscribe(plants => {
      this.plants = plants;
    });
  }

}
