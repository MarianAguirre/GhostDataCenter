import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faDatabase, faGasPump, faPersonShelter, faPersonWalkingArrowRight, faRestroom, faShield, faWarehouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  fabath = faRestroom
  faexit= faPersonWalkingArrowRight
  falobby = faPersonShelter
  faseguridad = faShield
  faoffice = faBriefcase
  fageneradores = faGasPump
  fadata = faDatabase
  faalmacen = faWarehouse

}
