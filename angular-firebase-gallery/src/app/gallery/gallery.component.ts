import { Component, OnInit, OnChanges} from '@angular/core';
import { ImageService } from '../services/image.service';
import { Observable } from 'rxjs/Observable';
import { GalleryImage } from '../models/galleryImage.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {

  

  // images:Observable<GalleryImage[]>;
  images:Observable<GalleryImage[]>;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
    this.images.subscribe(pic =>{
      console.log(pic.keys);
    });
  }

  ngOnChanges(){
    this.images = this.imageService.getImages();
    this.images.subscribe(pic =>{
      console.log(pic.keys.name);
    });
  }
  


}
