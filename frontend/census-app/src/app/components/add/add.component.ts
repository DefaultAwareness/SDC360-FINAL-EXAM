import { Component } from '@angular/core';
import { CensusService } from '../../census.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  form = {
    numPeople: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    year: '',
    censusTaker: ''
  };

  constructor(private censusService: CensusService) {}

  submit(): void {

    // ensure correct data types for MongoDB
    const payload = {
      numPeople: Number(this.form.numPeople),
      year: Number(this.form.year),
      street: this.form.street,
      city: this.form.city,
      state: this.form.state,
      zip: this.form.zip,
      censusTaker: this.form.censusTaker
    };

    this.censusService.addCensus(payload).subscribe({
      next: () => {
        alert('Census record added successfully');

        // optional reset
        this.form = {
          numPeople: '',
          street: '',
          city: '',
          state: '',
          zip: '',
          year: '',
          censusTaker: ''
        };
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }
}

