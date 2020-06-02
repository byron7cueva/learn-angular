import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
// Se importa PLATFORM_ID y las siguientes dependencias para saber si estamos en el servidor o en el browser
// por problemas que nos dio al implementar Server Side Render
import { isPlatformBrowser } from '@angular/common';

import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper;

  constructor(
    // tslint:disable-next-line: ban-types
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
  }

  // Se ejecuta cuando los elementos hijos fueron renderizados
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.mySwiper = new Swiper('.swiper-container');
    }
  }

}
