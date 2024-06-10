import { Injectable } from '@angular/core';
import { Enclos } from '../models/enclos.model';
import { ENCLOS_LIST } from '../constants/enclos.constants';

@Injectable({
  providedIn: 'root'
})
export class EnclosService {
  private enclos: Enclos[] = ENCLOS_LIST;

  getAnimals(): Enclos[] {
    return this.enclos;
  }
}
