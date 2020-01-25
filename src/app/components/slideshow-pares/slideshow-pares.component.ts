import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slidesho-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshoParesComponent implements OnInit {

  @Input() peliculas: Peliculas[] = [];
  public slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -15
  };


  constructor() { }

  ngOnInit() {}

}
