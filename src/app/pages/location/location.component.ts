import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  multimediaItems = [
    { name: 'SoundBoks-2', price: '70 CHF', image: 'assets/multimedia/soundboks.jpg' },
    { name: 'Batterie Soundboks', price: '20 CHF', image: 'assets/multimedia/bateriaSoundboks.jpg' },
    { name: 'Soundboks Backpack', price: '30 CHF', image: 'assets/multimedia/backpackSoundBoks.png' },
    { name: 'Trépied', price: '10 CHF', image: 'assets/multimedia/tripode.png' },
    { name: 'Lumières BEAMZ', price: '30 CHF', image: 'assets/multimedia/luces.png' },
    { name: 'Projecteur BenQ 4k', price: '50 CHF', image: 'assets/multimedia/proyector.png' },
    { name: 'Ecran de projection portable.', price: '20 CHF', image: 'assets/multimedia/pantalla.jpeg'},
  ];
  
  aquatiqueItems=[
    { name: 'Bateau Excursion', price: '50 CHF', image: 'assets/multimedia/boteExcursion.png' },
    { name: 'Paddle Jilong', price: '50 CHF', image: 'assets/multimedia/paddle.png' },
    { name: 'Gilet de sauvetage', price: '10 CHF', image: 'assets/multimedia/chalecoSalvavidas.png' },
  ];

  campingItems=[
    { name: 'Glacière 60 L', price: '0 CHF', image: 'assets/multimedia/cooler60.png' },
    { name: 'Glacière 47 L', price: '0 CHF', image: 'assets/multimedia/cooler47.png' },
    { name: 'Glacière 100 L', price: '0 CHF', image: 'assets/multimedia/cooler100.png' },
    { name: 'Tonneau 60 L', price: '0 CHF', image: 'assets/multimedia/tanque.png' },
    { name: 'Table pliante', price: '0 CHF', image: 'assets/multimedia/mesaPlegable.png' },
  ]

  sportItems=[
    { name: 'Filet EXIT', price: '0 CHF', image: 'assets/multimedia/redes.png' },
    { name: 'Table de ping pong', price: '0 CHF', image: 'assets/multimedia/pingPong.png' },
  ]

  tenteItems=[
    { name: 'Tente professionnel', price: '1000 CHF', image: 'assets/multimedia/carpa.png' },

  ]


}
