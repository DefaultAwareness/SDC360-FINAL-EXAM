import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CensusService {

  private apiUrl = 'http://localhost:3000/api/census';

  constructor(private http: HttpClient) {}

// READ ALL (list page)
getAllCensus(): Observable<any> {
  return this.http.get(this.apiUrl);
}

// READ ONE (update page)
getCensus(id: string): Observable<any> {
  return this.http.get(`${this.apiUrl}/${id}`);
}






  // GET ONE BY ID
  getCensusById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // ADD
  addCensus(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  // DELETE
  deleteCensus(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // UPDATE
  updateCensus(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }
}

