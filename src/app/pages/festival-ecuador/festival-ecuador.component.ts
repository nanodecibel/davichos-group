import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-festival-ecuador',
  templateUrl: './festival-ecuador.component.html',
  styleUrl: './festival-ecuador.component.css'
})
export class FestivalEcuadorComponent implements OnInit{

  images = [
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718837264/FestivalEcuador/photos/ristqf8ydyjrddwwvey1.png', alt: 'Festival Portada' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718837264/FestivalEcuador/photos/odecgrq57xrflat52eqk.png', alt: 'Festival Maestos de Ceremonia' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718837264/FestivalEcuador/photos/dsphe4zuspotccuiaabu.png', alt: 'Foto con Artistas' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718837263/FestivalEcuador/photos/ob1ru2isuwrvkfahi7d5.png', alt: 'Himno Nacional' },

    // Añade más imágenes según sea necesario
  ];

  videos = [
    { url: 'https://res.cloudinary.com/dactwdkqr/video/upload/v1718837589/FestivalEcuador/videos/eelyfsxczxnawlr2q5lg.mp4' },
    { url: 'https://res.cloudinary.com/dactwdkqr/video/upload/v1718837589/FestivalEcuador/videos/qk8nfwbifhnxa8k0fks0.mp4' },
    { url: 'https://res.cloudinary.com/dactwdkqr/video/upload/v1718837589/FestivalEcuador/videos/e2gx5ffwmhjsqsbgjzww.mp4' },
    { url: 'https://res.cloudinary.com/dactwdkqr/video/upload/v1718837589/FestivalEcuador/videos/ki3bfndh1gjmtseoo3d0.mp4' },

    // Añade más videos según sea necesario
  ];

  openStories() {
    window.open('https://www.instagram.com/stories/highlights/18004332983012358/', '_blank');
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
