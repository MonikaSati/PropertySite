import { Component, Input } from '@angular/core';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-gallery',
  templateUrl: './property-gallery.component.html',
  styleUrls: ['./property-gallery.component.css']
})
export class PropertyGalleryComponent {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(){}
  
  @Input()
  images: any
  
  ngOnInit(){
    console.log(this.images)
    this.galleryOptions = [
 
        {
          width: '100%',
          height: '460px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
        }
       
      ];
      // this.galleryImages=[{
      //   small:"https://localhost:7110//Images//gvd1a2as.zyt.jpg",
      //   medium:"https://localhost:7110//Images//gvd1a2as.zyt.jpg",
      //   big:"https://localhost:7110//Images//gvd1a2as.zyt.jpg "
      // }]
     this.galleryImages = this.getpics();
    //   let imgcont=[]
    //   small: this.images[1].image,
    //   medium:this.images[1].image,
    //   big:this.images[1].image
    // }
      // your gallery images
    
  }
  getpics():NgxGalleryImage[]{
    const imgcont: NgxGalleryImage[]=[]
    for(let img of this.images){
    imgcont.push({
  small: img.image,
  medium: img.image,
  big: img.image
})
    }
return imgcont;
  }
  }








