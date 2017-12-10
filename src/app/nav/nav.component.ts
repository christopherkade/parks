import { Component } from '@angular/core';
import { ParksService } from '../../services/parks.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {
  constructor(public parkService: ParksService) { }
}
