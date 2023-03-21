import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.setAttribute(document.body, 'color-theme', 'light');
  }
}
