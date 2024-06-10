import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeSoigneursComponent } from '../liste-soigneurs/liste-soigneurs.component';
import { Soigneur} from '../../models/soigneurs.model';
import { SoigneurService } from '../../services/soigneurs.service';

@Component({
  selector: 'app-view-soigneurs',
  standalone: true,
  imports: [ListeSoigneursComponent,CommonModule],
  templateUrl: './view-soigneurs.component.html',
  styleUrl: './view-soigneurs.component.scss'
})
export class ViewSoigneursComponent {
  soigneurs!: Soigneur[];

  constructor(private soigneurService: SoigneurService) { }

  ngOnInit(): void {
    this.soigneurs = this.soigneurService.getSoigneur();
  }
}
