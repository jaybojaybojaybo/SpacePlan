import { Component, OnInit } from '@angular/core';
import { NasaAsteroidApiService } from '../nasa-asteroid-api.service';
import { Asteroid } from "../asteroid.model";

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
      // console.log(thisAsteroid);
      
      if (theseAsteroids[thisAsteroid].length > 0) {
        console.log(theseAsteroids[thisAsteroid].length);
        let newAsteroidList: any[] = new Array();
        for (let j = 0; j < theseAsteroids[thisAsteroid].length; j++) {
          let threat = theseAsteroids[thisAsteroid][j].is_potentially_hazardous_asteroid
          if (threat == true) {
            let dataSet = (theseAsteroids[thisAsteroid][j]);
            let name = dataSet.name;
            let distance = Math.floor(dataSet.close_approach_data[0].miss_distance.miles);
            let velocity = Math.floor(dataSet.close_approach_data[0].relative_velocity.miles_per_hour);
            let timeLeft = Math.floor((distance/velocity)/24);
            let newAsteroid = new Asteroid(name, distance, velocity, timeLeft);
            newAsteroidList.push(newAsteroid);
          }
        }
        console.log(newAsteroidList.length);
        this.asteroids = newAsteroidList;        
      }
    })
  }
}
