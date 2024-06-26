import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-omc-live',
  templateUrl: './omc-live.component.html',
  styleUrl: './omc-live.component.css'
})
export class OmcLiveComponent implements OnInit{

  images = [
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718816027/omcLive/photos/eohyfjwqnbh99nldbzap.png', alt: 'OMC News' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718816026/omcLive/photos/pr3jamctug5dzmapgwqg.png', alt: 'OMC Artist1' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718816026/omcLive/photos/albulpnb1ehzjvviga8c.png', alt: 'omc location' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718816026/omcLive/photos/xwzcpbbfk2jnblixbqi1.png', alt: 'omc Public' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718816025/omcLive/photos/ltwcxnhcnt6pvfzytwee.png', alt: 'omc Artist2' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718816025/omcLive/photos/ta9ehjlrtrxpy56ruigy.png', alt: 'omc public' },


    // Añade más imágenes según sea necesario
  ];

  videos = [
    { url: 'https://res.cloudinary.com/dactwdkqr/video/upload/v1718816005/omcLive/videos/xthd2n3ng1pilatzsyxc.mp4' },
    { url: 'https://res.cloudinary.com/dactwdkqr/video/upload/v1718816006/omcLive/videos/rrwnxam7oyzjdaonvon5.mp4' },
  ];

  openStories() {
    window.open('https://www.instagram.com/stories/highlights/18044957260510731/', '_blank');
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
