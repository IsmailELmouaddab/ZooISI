import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Soigneur } from '../../models/soigneurs.model';
import { MatSlideToggle } from "@angular/material/slide-toggle"
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SoigneursComponent } from '../soigneurs/soigneurs.component';

@Component({
  selector: 'app-liste-soigneurs',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggle, SoigneursComponent],
  templateUrl: './liste-soigneurs.component.html',
  styleUrl: './liste-soigneurs.component.scss'
})
export class ListeSoigneursComponent {
  @Input() soigneurs!: Soigneur[];
  @Output() selectedSoigneur: EventEmitter<Soigneur> = new EventEmitter();

  isChecked: boolean = false;

  emitSelectedEnclos(soigneurs : Soigneur): void {
    this.selectedSoigneur.emit(soigneurs);
  }
}
