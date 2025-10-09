import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-correo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './correo.component.html',
  styleUrl: './correo.component.css'
})
export class CorreoComponent {
  email: string = '';
  submitted: boolean = false;

  handleSubmit() {
    console.log('Email submitted:', this.email);
    this.submitted = true;

    setTimeout(() => {
      this.submitted = false;
      this.email = '';
    }, 3000);
  }
}
