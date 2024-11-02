/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantService } from './plant.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Plant } from './plant';
import { faker } from '@faker-js/faker';
import { environment } from '../../environments/environment.development';

describe('Service: Plant', () => {
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantService]
    });
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verify that no unmatched requests are outstanding
  });

  it('should ...', inject([PlantService], (service: PlantService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a getPlants method', inject([PlantService], (service: PlantService) => {
    const mockPlant = [ new Plant(faker.string.uuid(),faker.word.sample(),faker.word.sample(), "Interior", faker.number.int(), faker.word.sample(), faker.word.sample() )];
    service.getPlants().subscribe(plant => {
      expect(plant).toEqual(mockPlant);
      expect(plant.length).toBe(1);
    });
    const req = httpMock.expectOne(environment.apiUrl);
    expect(req.request.method).toBe('GET');
    // Respond with the mock data
    req.flush(mockPlant);
  }));
});
