import { Component,Input } from '@angular/core';
import { Soigneur } from '../../models/soigneurs.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-soigneurs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './soigneurs.component.html',
  styleUrl: './soigneurs.component.scss'
})
export class SoigneursComponent {
  @Input() soigneurs!: Soigneur;
  @Input() displayPhoto!: boolean;
}
