import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { nasaApiKey } from './api-keys';
 
@Injectable()
export class NasaAsteroidApiService {

  constructor(private http: Http) { }

  getAsteroids(startD){
    return this.http.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startD}&end_date=${startD}&api_key=${nasaApiKey}`);
  }
}
