import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  ul (index: number): void {
    console.log("It works!")

    const underlines: NodeListOf<HTMLElement> = document.querySelectorAll(".underline");

    for (let i = 0; i < underlines.length; i++) {
        underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
    }
  }

}
