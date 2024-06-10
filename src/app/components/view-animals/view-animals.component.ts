import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeAnimauxComponent } from '../liste-animaux/liste-animaux.component';
import { Animal } from '../../models/animal.model';
import { AnimalService } from '../../services/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-animals',
  standalone: true,
  imports: [ListeAnimauxComponent,CommonModule],
  templateUrl: './view-animals.component.html',
  styleUrls: ['./view-animals.component.scss']
})
export class ViewAnimalsComponent implements OnInit {
  
  selectedAnimal!: Animal;

  animaux!: Animal[];

  @Output() animalSelected = new EventEmitter<Animal>();

  selectAnimal() {
    this.animalSelected.emit(this.selectedAnimal);
    this.router.navigate(['/animal-info']);
  }

  constructor(private animalService: AnimalService,private router:Router) { }

  ngOnInit(): void {
    this.animaux = this.animalService.getAnimals();
  }
  
  
}
