import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-como-funciona',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './como-funciona.component.html',
  styleUrl: './como-funciona.component.css'
})
export class ComoFuncionaComponent {
steps = [
    {
      icon: '🧪', // Puedes cambiar luego por un icono SVG o una imagen
      title: 'Sumerge la tira',
      description: 'Introduce la tira reactiva ALCO-CHECK en tu bebida durante 2 segundos.',
    },
    {
      icon: '💧',
      title: 'Espera el cambio',
      description: 'Observa la reacción química. El cambio de color ocurre en menos de 15 segundos.',
    },
    {
      icon: '✅',
      title: 'Verifica el resultado',
      description: 'Compara el color con la guía incluida. Verde = seguro, Rojo = adulterado.',
    },
  ];
}
