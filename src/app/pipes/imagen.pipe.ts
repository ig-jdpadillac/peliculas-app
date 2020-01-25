import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {


  transform(img: string, size: string = 'w500' ): string {

    let imageUrl: string = './assets/images/no-image-banner.jpg' ;

    if (img) {
      imageUrl = `${environment.imgPath}/${size}/${img}`;
    }

    return imageUrl;
  }

}
