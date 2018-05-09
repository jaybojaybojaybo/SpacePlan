import { Component, OnInit } from '@angular/core';
import { NasaAsteroidApiService } from '../nasa-asteroid-api.service';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.css'],
  providers: [NasaAsteroidApiService]
})

export class DateFormComponent {
  asteroids: any[] = null;
  constructor(private nasaAsteroid: NasaAsteroidApiService) { }
  getAsteroids(date: string) {
    this.nasaAsteroid.getAsteroids(date).subscribe(response => {
      let theseAsteroids = response.json().near_earth_objects;
      console.log(theseAsteroids);
      let thisAsteroid = Object.keys(theseAsteroids)[0];
      console.log(thisAsteroid);
      
      if (theseAsteroids[thisAsteroid].length > 0) {
        console.log(theseAsteroids[thisAsteroid].length);
        let newAsteroidList: any[] = new Array();
        for (let j = 0; j < theseAsteroids[thisAsteroid].length; j++) {
          console.log(theseAsteroids[thisAsteroid][j]);
          let threat = theseAsteroids[thisAsteroid][j].is_potentially_hazardous_asteroid
          if (threat == true) {
            let newAsteroid = theseAsteroids[thisAsteroid][j]
            newAsteroidList.push(newAsteroid);
          }
        }
        console.log(newAsteroidList.length);
        this.asteroids = newAsteroidList;        
      } 
    })
  }
}
