import { Component, Input, OnInit } from '@angular/core';
import { Asteroid } from "../asteroid.model";

@Component({
  selector: 'app-asteroid-list',
  templateUrl: './asteroid-list.component.html',
  styleUrls: ['./asteroid-list.component.css'],
  providers: []
})
export class AsteroidListComponent{
  @Input() childAsteroids
  
  constructor() { 
    
  }
}
