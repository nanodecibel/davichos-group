import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mushi-mushi',
  templateUrl: './mushi-mushi.component.html',
  styleUrls: ['./mushi-mushi.component.css']
})
export class MushiMushiComponent implements OnInit {
  images = [
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718796654/MushiMushi/photos/xmrvl4utpj0rmvvpclq5.png', alt: 'Mushi Mushi DragonDj' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718796654/MushiMushi/photos/l7cj9u76oslkr8lybnrc.png', alt: 'Mushi Mushi Location' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718796654/MushiMushi/photos/t8d4bevifjh0ult9ybgd.png', alt: 'Mushi Mushi Public 2' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718799113/MushiMushi/photos/dvp3hokc0ukdqa6ouskv.png', alt: 'Mushi Mushi Public' },

    // Añade más imágenes según sea necesario
  ];

  videos = [
    { url: 'https://res.cloudinary.com/dactwdkqr/video/upload/v1718767258/MushiMushi/videos/wli8ct1pxdatrzqmlzw3.mp4' },
    { url: 'https://res.cloudinary.com/dactwdkqr/video/upload/v1718767258/MushiMushi/videos/eeog4184vmjtroktkjvl.mp4' },
    // Añade más videos según sea necesario
  ];

  openStories() {
    window.open('https://www.instagram.com/stories/highlights/18037239376754626/', '_blank');
  }

  openImage(url: string) {
    const modal = document.getElementById("imageModal");
    const imgModal = document.getElementById("imgModal") as HTMLImageElement;
    if (modal && imgModal) {
      modal.style.display = "block";
      imgModal.src = url;
    }
  }

  closeModal() {
    const modal = document.getElementById("imageModal");
    if (modal) {
      modal.style.display = "none";
    }
  }

  constructor() { }

  ngOnInit(): void { }
}
