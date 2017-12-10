import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  readonly parks = [
    {
      name: 'Disneyland Paris',
      image: '../../assets/img/disneylandparis-logo.png',
      subparks: [
        {
          name: 'Magic Kingdom',
          link: '/dlp-mk'
        },
        {
          name: 'Walt Disney Studios',
          link: '/dlp-wds'
        }
      ]
    },
    {
      name: 'Disneyland Resort',
      image: '../../assets/img/disneyland-logo.png',
      subparks: [
        {
          name: 'Magic Kingdom',
          link: '/dlr-mk'
        },
        {
          name: 'California Adventure',
          link: '/dlr-ca'
        }
      ]
    },
    {
      name: 'Walt Disney World',
      image: '../../assets/img/wdw-logo.png',
      subparks: [
        {
          name: 'Magic Kingdom',
          link: '/wdw-mk'
        },
        {
          name: 'Epcot',
          link: '/wdw-epcot'
        },
        {
          name: 'Animal Kingdom',
          link: '/wdw-ak'
        },
        {
          name: 'Hollywood Studios',
          link: '/wdw-hs'
        }
      ]
    }
  ]

  constructor() { }
}
