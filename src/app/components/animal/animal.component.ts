import { Component, Input, OnInit } from '@angular/core';
import { Animal } from '../../models/animal.model';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit{
  @Input() animal!: Animal;
  @Input() displayPhoto!: boolean;
  selectedAnimal!: Animal;
  
  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    this.selectedAnimal = this.animalService.getSelectedAnimal();
  }
  

}
