/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlantListComponent } from './plant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';
import { de, faker } from '@faker-js/faker';
import { of } from 'rxjs';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let plantServiceSpy: jasmine.SpyObj<PlantService>;
  let debug: DebugElement;
  let plantList: Array<Plant> = [];

  beforeAll(() => {
    plantList.push(new Plant(faker.string.uuid(),faker.word.sample(),faker.word.sample(), "Interior", faker.number.int(), faker.word.sample(), faker.word.sample() ));
    plantList.push(new Plant(faker.string.uuid(),faker.word.sample(),faker.word.sample(), "Exterior", faker.number.int(), faker.word.sample(), faker.word.sample() ));
    plantList.push(new Plant(faker.string.uuid(),faker.word.sample(),faker.word.sample(), "Interior", faker.number.int(), faker.word.sample(), faker.word.sample() ));
  });
  beforeEach(waitForAsync(() => {
    const spy = jasmine.createSpyObj('PlantService', ['getPlants']);
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ PlantListComponent ],
      providers: [ { provide: PlantService, useValue: spy} ]
    })
    .compileComponents();
    plantServiceSpy = TestBed.inject(PlantService) as jasmine.SpyObj<PlantService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    plantServiceSpy.getPlants.and.returnValue(of(plantList));
    component.ngOnInit();
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 <th> elements', () => {
    expect(debug.queryAll(By.css('th'))).toHaveSize(4);
    expect(debug.queryAll(By.css('th'))[0].nativeElement.textContent).toContain('#');
    expect(debug.queryAll(By.css('th'))[1].nativeElement.textContent).toContain('Nombre común');
    expect(debug.queryAll(By.css('th'))[2].nativeElement.textContent).toContain('Tipo');
    expect(debug.queryAll(By.css('th'))[3].nativeElement.textContent).toContain('Clima');
  });

  it('should have 4 <tr> elements', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4);
    expect(debug.queryAll(By.css('td'))).toHaveSize(12);
  });

  it('should have 2 interior plants', () => {
    expect(component.interiorPlants).toHaveSize(2);
    expect(debug.queryAll(By.css('li'))[0].nativeElement.textContent).toContain('Total plantas de interior: 2');
  });

  it('should have 1 exterior plant', () => {
    expect(component.exteriorPlants).toHaveSize(1);
    expect(debug.queryAll(By.css('li'))[1].nativeElement.textContent).toContain('Total plantas de exterior: 1');
  });

});
