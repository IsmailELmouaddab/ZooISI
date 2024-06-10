import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Enclos } from '../../models/enclos.model';
import { MatSlideToggle } from "@angular/material/slide-toggle"
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EnclosComponent } from '../enclos/enclos.component';

@Component({
  selector: 'app-liste-enclos',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggle, EnclosComponent],
  templateUrl: './liste-enclos.component.html',
  styleUrls: ['./liste-enclos.component.scss']
})
export class ListeEnclosComponent {
  @Input() enclos!: Enclos[];
  @Output() selectedEnclos: EventEmitter<Enclos> = new EventEmitter();

  isChecked: boolean = false;

  emitSelectedEnclos(enclos : Enclos): void {
    this.selectedEnclos.emit(enclos);
  }
  
}
