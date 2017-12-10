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

  constructor(private http: Http) { }

  getAttractions(parkName: string): Observable<Attraction> {
    const url = this.ENDPOINT + '/' + parkName;
    return this.http.get(url)
      .map(res => res.json());
    // switch (parkName) {
    //   case 'dlp-mk':
    //     url += '/dlp-mk';
    //   case 'dlp-wds':
    //     url += '/dlp-wds';
    //   case 'wdw-mk':
    //     return this.parksService.getWaltDisneyWorldMagicKingdom();
    //   case 'wdw-epcot':
    //     return this.parksService.getWaltDisneyWorldEpcot();
    //   case 'wdw-ak':
    //     return this.parksService.getWaltDisneyWorldAnimalKingdom();
    //   case 'wdw-hs':
    //     return this.parksService.getWaltDisneyWorldHollywoodStudios();
    //   case 'dlr-mk':
    //     return this.parksService.getDisneylandResortMagicKingdom();
    //   case 'dlr-ca':
    //     return this.parksService.getDisneylandResortCaliforniaAdventure();
    //   default:
    //     break;
    // }
  }

  // DISNEYLAND PARIS
  getDisneylandParisMKAttractions(): Observable<Attraction> {
    const url = this.ENDPOINT + '/dlp-mk';
    return this.http.get(url)
      .map(res => res.json());
  }

  getDisneylandParisWDSAttractions(): Observable<Attraction> {
    const url = this.ENDPOINT + '/dlp-wds';
    return this.http.get(url)
      .map(res => res.json());
  }
  // DISNEYLAND PARIS END

  // WALT DISNEY WORLD
  getWaltDisneyWorldMagicKingdom(): Observable<Attraction> {
    const url = this.ENDPOINT + '/wdw-mk';
    return this.http.get(url)
      .map(res => res.json());
  }

  getWaltDisneyWorldEpcot(): Observable<Attraction> {
    const url = this.ENDPOINT + '/wdw-epcot';
    return this.http.get(url)
      .map(res => res.json());
  }

  getWaltDisneyWorldAnimalKingdom(): Observable<Attraction> {
    const url = this.ENDPOINT + '/wdw-ak';
    return this.http.get(url)
      .map(res => res.json());
  }

  getWaltDisneyWorldHollywoodStudios(): Observable<Attraction> {
    const url = this.ENDPOINT + '/wdw-hs';
    return this.http.get(url)
      .map(res => res.json());
  }
  // WALT DISNEY WORLD END

  // DISNEYLAND CALIFORNIA
  getDisneylandResortMagicKingdom(): Observable<Attraction> {
    const url = this.ENDPOINT + '/dlr-mk';
    return this.http.get(url)
      .map(res => res.json());
  }

  getDisneylandResortCaliforniaAdventure(): Observable<Attraction> {
    const url = this.ENDPOINT + '/dlr-ca';
    return this.http.get(url)
      .map(res => res.json());
  }
  // DISNEYLAND CALIFORNIA END

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }
}
