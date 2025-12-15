import { Component, OnInit } from '@angular/core';
import { CensusService } from '../../census.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  censusRecords: any[] = [];

  constructor(private censusService: CensusService) {}

  ngOnInit(): void {
    this.censusService.getAllCensus().subscribe({
      next: (data: any) => {
        this.censusRecords = data;
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

  delete(id: string): void {
    this.censusService.deleteCensus(id).subscribe({
      next: () => {
        this.censusRecords = this.censusRecords.filter(c => c._id !== id);
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }
}

