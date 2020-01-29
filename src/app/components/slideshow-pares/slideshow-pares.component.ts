import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slidesho-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshoParesComponent implements OnInit {

  @Input() peliculas: Peliculas[] = [];
  @Output() cargarSiguientes: EventEmitter<any> = new EventEmitter();


  public slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -15
  };


  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  cargarMas() {
    this.cargarSiguientes.emit();
  }

  async verDetalle(movieId: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        movieId
      }
    });

    modal.present();
  }

}
