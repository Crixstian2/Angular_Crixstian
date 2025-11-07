import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal';
import { InfoComponent } from './info/info';

export const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'info', component: InfoComponent },
  { path: '**', redirectTo: 'principal' }
];
