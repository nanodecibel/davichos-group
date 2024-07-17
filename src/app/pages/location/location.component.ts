import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  multimediaItems = [
    { name: 'SoundBoks-2', price: '70 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721140652/Location/vcfaukydqxncqtogxplh.jpg' },
    { name: 'Batterie Soundboks', price: '20 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721140684/Location/cqsilvqxi4glilktji9f.jpg' },
    { name: 'Soundboks Backpack', price: '30 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721140728/Location/ydzljphnwd99stwdeyt3.png' },
    { name: 'Trépied', price: '10 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721140778/Location/ttuuepmxj9ppfb8y8xas.png' },
    { name: 'Lumières BEAMZ', price: '30 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721140820/Location/oxlwalpdisaxdl8nl8c9.png' },
    { name: 'Projecteur BenQ 4k', price: '50 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721140858/Location/ebzabhmrcy2369jtmexc.png' },
    { name: 'Ecran de projection portable.', price: '20 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721140892/Location/xqv9tnsm9qwownp4jusl.jpg'},
  ];
  
  aquatiqueItems=[
    { name: 'Bateau Excursion', price: '50 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721141073/Location/wd4ruspoc0awv9tzopyl.png' },
    { name: 'Paddle Jilong', price: '50 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721141107/Location/fuepsjdm3r3wm3a7aauy.png' },
    { name: 'Gilet de sauvetage', price: '10 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721141143/Location/dlvhy8lciytvqbbceywe.png' },
  ];

  campingItems=[
    { name: 'Glacière 60 L', price: '10 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721141174/Location/lqpwzioq5hiqe7f6scsx.png' },
    { name: 'Glacière 47 L', price: '10 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721141208/Location/tscrobc5t9yng8mynjnw.png' },
    { name: 'Glacière 100 L', price: '15 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721141254/Location/x5suc3oy6koandcdx02s.png' },
    { name: 'Tonneau 60 L', price: '15 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721141288/Location/rtkdb6cu6nefe8lvwgqt.png' },
    { name: 'Table pliante', price: '20 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721141325/Location/jpgkahrdvxilqov0p6gy.png' },
  ]

  sportItems=[
    { name: 'Filet EXIT', price: '10 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721141365/Location/glryy02olxplnm3pc25d.png' },
    { name: 'Table de ping pong', price: '30 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721141410/Location/kk2zcwqnthuasgiurtjt.png' },
  ]

  tenteItems=[
    { name: 'Tente professionnel', price: '1000 CHF', image: 'https://res.cloudinary.com/dactwdkqr/image/upload/v1721141443/Location/vgtt1sjvwbdvslecjuug.png' },

  ]


}
