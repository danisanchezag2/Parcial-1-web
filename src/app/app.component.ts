import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlantModule } from './plant/plant.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlantModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parcial-plantas-project';
}
