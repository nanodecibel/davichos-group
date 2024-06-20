import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paulaner-fest',
  templateUrl: './paulaner-fest.component.html',
  styleUrl: './paulaner-fest.component.css'
})
export class PaulanerFestComponent implements OnInit{

  images = [
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718814705/PaulanerFest/photos/o6uzdazgmatsyea5hxt5.png', alt: 'Paulaner Girls' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718814706/PaulanerFest/photos/whb1jsgt7g4zasz5qzz8.png', alt: 'Paulaner patrocinants' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718814705/PaulanerFest/photos/fnosgnn9uhjlv0gtgzvb.png', alt: 'Paulaner Djs' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718814704/PaulanerFest/photos/npbjqioifgydz7qxbdcp.png', alt: 'Paulaner Portada' },

    // Añade más imágenes según sea necesario
  ];

  videos = [
    { url: 'https://res.cloudinary.com/dactwdkqr/video/upload/v1718814681/PaulanerFest/videos/lrwillf9g36tbcgpmrzz.mp4' },
    { url: 'https://res.cloudinary.com/dactwdkqr/video/upload/v1718814681/PaulanerFest/videos/pabjvpcc8iow2ymdx9cz.mp4' },
    // Añade más videos según sea necesario
  ];

  openStories() {
    window.open('https://www.instagram.com/stories/highlights/17957302457673736/', '_blank');
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
