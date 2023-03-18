import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private http: HttpClient) { }

  getItems(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/api/v1/person/${id}`);
  }
}
