import { Component } from '@angular/core';
import { VideoComponent } from "../video-component/video.component";
import { ComoFuncionaComponent } from "../como-funciona/como-funciona.component";
import { PreguntasFrecuentesComponent } from "../preguntas-frecuentes/preguntas-frecuentes.component";
import { CorreoComponent } from "../correo/correo.component";
import { MisionVisionComponent } from "../mision-vision/mision-vision.component";
import { MapComponent } from "../map/map.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [VideoComponent, ComoFuncionaComponent, PreguntasFrecuentesComponent, CorreoComponent, MisionVisionComponent, MapComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
