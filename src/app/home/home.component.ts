import { Component, OnInit } from '@angular/core';
import { ParksService } from '../../services/parks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  readonly parks = [
    {
      name: 'Disneyland Paris',
      image: 'assets/img/disneylandparis-logo.png',
      subparks: [
        {
          name: 'Disneyland',
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
      image: 'assets/img/disneyland-logo.png',
      subparks: [
        {
          name: 'Disneyland',
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
      image: 'assets/img/wdw-logo.png',
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

  images = ['disneylandparis.jpg', 'disneyland.jpg', 'epcot.jpg', 'waltdisneyworld-mk.jpg']
  image = 'url(assets/img/';

  constructor(private parksService: ParksService) {}

  ngOnInit() {    
    // Select one image randomly and set it as background image
    this.image += this.images[Math.floor(Math.random() * this.images.length)] + ')';
    this.parksService.selectedPark = null;
  }
}
