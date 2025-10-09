import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface FAQ {
  question: string;
  answer: string;
}


@Component({
  selector: 'app-preguntas-frecuentes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrl: './preguntas-frecuentes.component.css'
})
export class PreguntasFrecuentesComponent {
  faqs: FAQ[] = [
    {
      question: "¿Cómo funcionan las tiras reactivas ALCO-CHECK?",
      answer: "Las tiras reactivas ALCO-CHECK utilizan tecnología química avanzada que detecta la presencia de sustancias adulterantes comunes en bebidas alcohólicas. Simplemente sumerge la tira en tu bebida durante 15 segundos y observa el cambio de color. Si la tira cambia a un color de advertencia, indica la presencia de sustancias peligrosas."
    },
    {
      question: "¿Qué sustancias pueden detectar?",
      answer: "Nuestras tiras pueden detectar una amplia gama de sustancias adulterantes incluyendo GHB, ketamina, rohypnol y otros sedantes comúnmente utilizados para adulterar bebidas. La tecnología está diseñada para identificar las sustancias más peligrosas encontradas en ambientes de vida nocturna."
    },
    {
      question: "¿Son fáciles de usar en un bar o antro?",
      answer: "Absolutamente. Las tiras ALCO-CHECK están diseñadas para ser discretas y fáciles de usar en cualquier ambiente. Son del tamaño de un palillo de dientes, caben en tu bolsillo o cartera, y el resultado es visible en solo 15 segundos. No necesitas ser un experto para usarlas."
    },
    {
      question: "¿Cuánto tiempo duran las tiras sin abrir?",
      answer: "Las tiras ALCO-CHECK tienen una vida útil de 2 años cuando se mantienen en su empaque original sellado. Una vez abierto el paquete, recomendamos usar las tiras dentro de 6 meses para garantizar la máxima efectividad. Cada paquete incluye la fecha de caducidad claramente marcada."
    },
    {
      question: "¿Dónde puedo comprar ALCO-CHECK?",
      answer: "Actualmente estamos en fase de lanzamiento. Regístrate con tu correo electrónico en la sección de arriba para ser de los primeros en saber cuándo estarán disponibles para compra. Ofreceremos envíos a toda la república y descuentos especiales para los primeros compradores."
    },
    {
      question: "¿Qué tan precisas son las tiras?",
      answer: "Nuestras tiras tienen una precisión del 99.5% en condiciones de laboratorio y del 97% en condiciones reales de uso. Han sido probadas extensivamente y cumplen con todos los estándares de seguridad. Sin embargo, siempre recomendamos confiar en tu instinto y no consumir una bebida si tienes cualquier duda."
    }
  ];

  openIndex: number | null = null;

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
