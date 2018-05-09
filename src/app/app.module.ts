import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DateFormComponent } from './date-form/date-form.component';
import { routing } from './/app-routing.module';
import { AsteroidListComponent } from './asteroid-list/asteroid-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DateFormComponent,
    AsteroidListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
