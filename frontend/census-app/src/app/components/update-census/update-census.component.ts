import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CensusService } from '../../census.service';

@Component({
  selector: 'app-update-census',
  templateUrl: './update-census.component.html'
})
export class UpdateCensusComponent implements OnInit {

  id: string = '';

  form = {
    numPeople: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    year: '',
    censusTaker: ''
  };

  constructor(
    private route: ActivatedRoute,
    private censusService: CensusService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    this.censusService.getCensus(this.id).subscribe((data: any) => {
      this.form = data;
    });
  }

  submit(): void {
    this.censusService.updateCensus(this.id, this.form).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}


