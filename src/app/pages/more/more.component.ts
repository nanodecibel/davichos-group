import { Component } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent {
  staffMembers = [
    { name: 'Davicho', photo: 'assets/multimedia/david.png' },
    { name: 'Yenni', photo: 'assets/multimedia/yenni.png' },
    { name: 'Carlos', photo: 'assets/multimedia/carlos.png' },
    { name: 'Jonas', photo: 'assets/multimedia/jonas.png' },
    { name: 'Byron', photo: 'assets/multimedia/byron.png' },
    { name: 'Silvia', photo: 'assets/multimedia/silvia.png' },
    { name: 'Keily', photo: 'assets/multimedia/keily.png' },
    { name: 'Kashi', photo: 'assets/multimedia/kashi.png' },
    { name: 'Stephane', photo: 'assets/multimedia/stephane.png' },
    { name: 'Gaby', photo: 'assets/multimedia/gaby.png' },
    { name: 'Pancho', photo: 'assets/multimedia/pancho.png' },
    { name: 'Rony', photo: 'assets/multimedia/rony.png' },
    { name: 'Valeria', photo: 'assets/multimedia/valeria.png' },
    { name: 'Sergio', photo: 'assets/multimedia/sergio.png' },
  ];
}
