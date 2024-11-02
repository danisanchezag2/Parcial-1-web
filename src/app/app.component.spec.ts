import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PlantService } from './plant/plant.service';
import { HttpClientModule } from '@angular/common/http';
import { PlantModule } from './plant/plant.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppComponent,PlantModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
