import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

  onload = () => {
    const element = document.querySelector('.cont_principal') as HTMLElement;
    if (element) {
        element.className = "cont_principal cont_error_active";
    }
  }
}
