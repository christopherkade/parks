import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Attraction } from '../models/attraction';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class ParksService {

  private ENDPOINT = environment.ENDPOINT;
  loading: boolean = false;
  selectedPark: string;

  constructor(private http: Http) { }

  getAttractions(parkName: string): Observable<Attraction> {
    this.selectedPark = parkName;
    const url = this.ENDPOINT + '/' + parkName;
    return this.http.get(url)
      .map(res => res.json());
  }
}
