import { Component, Input } from '@angular/core';
import { Enclos } from '../../models/enclos.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enclos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enclos.component.html',
  styleUrls: ['./enclos.component.scss']
})
export class EnclosComponent {
  @Input() enclos!: Enclos;
  @Input() displayPhoto!: boolean;
}
