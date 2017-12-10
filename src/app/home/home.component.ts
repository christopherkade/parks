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
      image: 'https://user-images.githubusercontent.com/15229355/33804821-d9c2a5fc-dda4-11e7-93a4-3c1c4bb44360.png',
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
      image: 'https://user-images.githubusercontent.com/15229355/33804820-d79dc4fa-dda4-11e7-9f03-7538bb1344c1.png',
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
      image: 'https://user-images.githubusercontent.com/15229355/33804822-dcb56c90-dda4-11e7-9aaf-d5a0e26dd3f9.png',
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

  constructor(private parksService: ParksService) {}

  ngOnInit() {
    this.parksService.selectedPark = null;
  }
}
