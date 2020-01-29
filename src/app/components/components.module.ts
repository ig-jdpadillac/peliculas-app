import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { CurrentTitleComponent } from './current-title/current-title.component';
import { SlideshoParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  entryComponents: [
    DetalleComponent
  ],
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    CurrentTitleComponent,
    SlideshoParesComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    CurrentTitleComponent,
    SlideshoParesComponent,
    DetalleComponent
  ]
})
export class ComponentsModule { }
