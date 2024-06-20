import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copa-indium',
  templateUrl: './copa-indium.component.html',
  styleUrl: './copa-indium.component.css'
})
export class CopaIndiumComponent implements OnInit{
  images = [
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718802454/Copa%20Indium/photos/c98ycj27zlnxgrsertsh.png', alt: 'photo1' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718802454/Copa%20Indium/photos/mpizymkvwojdyboakimn.png', alt: 'groups' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718802455/Copa%20Indium/photos/lrp148fv6a4yb0slblru.png', alt: 'first' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718802454/Copa%20Indium/photos/b4zxtosjceitcrzngutl.png', alt: 'Second' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718802454/Copa%20Indium/photos/lliav3k36hbthwce5jmb.png', alt: 'Thirth' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718802454/Copa%20Indium/photos/af1ehluas5km7mc8ilcl.png', alt: 'fourth' },

  ];

  videos = [
    { url: 'https://res.cloudinary.com/dactwdkqr/video/upload/v1718801668/Copa%20Indium/videos/uob4wfw4tazo2fz0sdl9.mp4' },
    { url: 'https://res.cloudinary.com/dactwdkqr/video/upload/v1718801668/Copa%20Indium/videos/hpf59jvwnttv7iy7lg0d.mp4' },

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
