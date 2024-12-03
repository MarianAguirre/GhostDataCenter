import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faBorderAll, faHouse, faX } from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from './navbar';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ghost Data Center';

  constructor(private router: Router) {}

  navigateToSeguridad() {
    this.router.navigate(['/seguridad']);
  }

  navigateToRefrigeracion() {
    this.router.navigate(['/refrigeracion']);
  }

  navigateToHardware() {
    this.router.navigate(['/hardware']);
  }

  navigateToDesign() {
    this.router.navigate(['/diseño']);
  }

  navigateToCostos() {
    this.router.navigate(['/costos']);
  }
}
