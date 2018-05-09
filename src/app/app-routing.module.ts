import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { DateFormComponent } from './date-form/date-form.component';

const appRoutes: Routes = [
  { path: '', component: DateFormComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

