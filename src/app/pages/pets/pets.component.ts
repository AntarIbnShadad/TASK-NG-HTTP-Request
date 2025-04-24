import { Component, effect, inject } from '@angular/core';
import { PetsHeaderComponent } from '../../components/pets-header/pets-header.component';
import { PetsListComponent } from '../../components/pets-list/pets-list.component';
import { Pet, pets } from '../../../data/pets';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [PetsHeaderComponent, PetsListComponent,HttpClientModule],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css',
})
export class PetsComponent {
  query = '';
  allPets = pets;

  private http = inject(HttpClient)

//  constructor(private _client = HttpClient){}


  ngOnInit() {
    this.getAll().subscribe((response) => {
      console.log(response); // log the response
      this.allPets = response;
    });
  }


  setQuery(query: string) {
    this.query = query;
  }

  getAll(): Observable<Pet[]>{
    return this.http.get<Pet[]>("https://pets-react-query-backend.eapi.joincoded.com/pets")
  }

  get filteredPets() {
    return this.allPets.filter((pet) =>
      pet.name.toLowerCase().includes(this.query.toLowerCase())
    );
  }
}
