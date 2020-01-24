import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  private url: string = 'https://image.tmdb.org/t/p';

  transform(img: string, size: string = 'w500' ): string {

    let imageUrl: string = './assets/images/no-image-banner.jpg' ;

    if (img) {
      imageUrl = `${this.url}/${size}/${img}`;
    }

    return imageUrl;
  }

}
