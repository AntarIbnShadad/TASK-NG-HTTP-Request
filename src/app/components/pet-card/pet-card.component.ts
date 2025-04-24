import { Component, Input, inject,effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pet } from '../../../data/pets';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent {
  @Input() pet!: Pet;


}


