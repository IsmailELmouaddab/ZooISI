import { Injectable } from '@angular/core';
import { Soigneur } from '../models/soigneurs.model';
import { SOIGNEUR } from '../constants/soigneurs.constants';

@Injectable({
  providedIn: 'root'
})
export class SoigneurService {
  private soigneurs: Soigneur[] = SOIGNEUR;

  getSoigneur(): Soigneur[] {
    return this.soigneurs;
  }
}
