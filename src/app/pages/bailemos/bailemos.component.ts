import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bailemos',
  templateUrl: './bailemos.component.html',
  styleUrl: './bailemos.component.css'
})
export class BailemosComponent implements OnInit{

    images = [
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718819125/Bailemos/photos/zomldpipdxi1ffipdyka.png', alt: 'Portada' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718819126/Bailemos/photos/kks60xqb9wht8t2dbfmy.png', alt: 'dia1' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718819125/Bailemos/photos/aapdmiocgvczqjxab2ik.png', alt: 'dia2' },
    { url: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1718819126/Bailemos/photos/iuyuvxkjljaqejfcup3c.png', alt: 'Zaid Photo' },

    // Añade más imágenes según sea necesario
  ];

  videos = [
    { url: 'https://res.cloudinary.com/dactwdkqr/video/upload/v1718836728/Bailemos/videos/encswbabuwme5woi3i4c.mp4' },
    { url: 'https://res.cloudinary.com/dactwdkqr/video/upload/v1718819079/Bailemos/videos/omtsakbvtqtfsaszbusu.mp4' },
    { url: 'https://res.cloudinary.com/dactwdkqr/video/upload/v1718819080/Bailemos/videos/ebmasdeiwesuecmerqga.mp4' },
    { url: 'https://res.cloudinary.com/dactwdkqr/video/upload/v1718836728/Bailemos/videos/krti93ty3umerfdqrzq6.mp4' },

    // Añade más videos según sea necesario
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
