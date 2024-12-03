import { Routes } from '@angular/router';
import { SeguridadComponent } from './seguridad';
import { RefrigeracionComponent } from './refrigeracion';
import { HardwareSoftwareComponent } from './hardware-software';
import { DesignComponent } from './design';
import { CostosComponent } from './costos';
import { HomeComponent } from './home';
import { EnergyComponent } from './energy/energy.component';

export const routes: Routes = [
  { path: 'seguridad', component: SeguridadComponent },
  { path: 'refrigeracion', component: RefrigeracionComponent },
  { path: 'hardware', component: HardwareSoftwareComponent },
  { path: 'design', component: DesignComponent },
  { path: 'costos', component: CostosComponent },
  { path: 'home', component: HomeComponent},
  { path: 'energy', component: EnergyComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }

];
