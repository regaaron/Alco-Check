import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   menuOpen = false;

  closeMenu() {
    setTimeout(() => {
      this.menuOpen = false;
    }, 300); // Espera 300ms para que navegue primero
  }
}
