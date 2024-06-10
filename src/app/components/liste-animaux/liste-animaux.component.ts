import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from '../../models/animal.model';
import { MatSlideToggle } from "@angular/material/slide-toggle"
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimalComponent } from '../animal/animal.component';

@Component({
  selector: 'app-liste-animaux',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggle, AnimalComponent],
  templateUrl: './liste-animaux.component.html',
  styleUrls: ['./liste-animaux.component.scss']
})
export class ListeAnimauxComponent {
  @Input() animaux!: Animal[];
  @Output() selectedAnimal: EventEmitter<Animal> = new EventEmitter();

  isChecked: boolean = false;

  emitSelectedAnimal(animal : Animal): void {
    this.selectedAnimal.emit(animal);
  }
  
}
