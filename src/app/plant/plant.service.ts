import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from './plant';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
private apiUrl:string = environment.apiUrl;
constructor(private readonly httpService: HttpClient) { }

getPlants(): Observable<Plant[]> {
  return this.httpService.get<Plant[]>(this.apiUrl);
}
}
