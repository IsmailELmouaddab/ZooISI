import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeEnclosComponent } from '../liste-enclos/liste-enclos.component';
import { Enclos } from '../../models/enclos.model';
import { EnclosService } from '../../services/enclos.service';


@Component({
  selector: 'app-view-enclos',
  standalone: true,
  imports: [ListeEnclosComponent,CommonModule],
  templateUrl: './view-enclos.component.html',
  styleUrls: ['./view-enclos.component.scss']
})
export class ViewEnclosComponent implements OnInit {


  enclos!: Enclos[];

  constructor(private enclosService: EnclosService) { }

  ngOnInit(): void {
    this.enclos = this.enclosService.getAnimals();
  }
}
