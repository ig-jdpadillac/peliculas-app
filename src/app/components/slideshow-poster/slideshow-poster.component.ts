import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() peliculas: Peliculas[] = [];

  public slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  };

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

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
