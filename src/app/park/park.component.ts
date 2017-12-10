import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attraction } from '../../models/attraction';
import { ParksService } from '../../services/parks.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.sass']
})
export class ParkComponent implements OnInit {

  attractions: any = [];

  constructor(private parksService: ParksService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // Get current park's name
    const parkName = this.route.snapshot.params['name'];
    this.parksService.loading = true;
    this.attractions = [];

    // Get attractions for said park
    this.parksService.getAttractions(parkName)
      .subscribe(attractions => {
        this.attractions = attractions;
        this.parksService.loading = false;
      });
  }
}
