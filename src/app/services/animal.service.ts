import { Injectable } from '@angular/core';
import { Animal } from '../models/animal.model';
import { ANIMAUX } from '../constants/animaux.constants';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animals: Animal[] = ANIMAUX;
  private selectedAnimal!: Animal;

  getAnimals(): Animal[] {
    return this.animals;
  }
  setSelectedAnimal(animal: Animal) {
    this.selectedAnimal = animal;
  }

  getSelectedAnimal(): Animal {
    return this.selectedAnimal;
  }
}
