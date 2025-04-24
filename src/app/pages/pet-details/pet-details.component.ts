import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../../../data/pets';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent {
  pet: Pet | null = null;
  //pets = pets;

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  
    this.getSingle(id).subscribe( (Response) => {this.pet = Response; console.log(Response)} );

  }






    http = inject(HttpClient)
  
    getSingle(id:number): Observable<Pet>{
      return this.http.get<Pet>(`https://pets-react-query-backend.eapi.joincoded.com/pets/${id}`)
      
    }

    getAll(): Observable<Pet[]>{
      return this.http.get<Pet[]>("https://pets-react-query-backend.eapi.joincoded.com/pets")
    }
}
