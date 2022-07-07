import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  };

  getAllCategoryService(): Observable<any> {
    return this.http.get<any>(`${API_URL}/categories`);
  };

  createCategoryService(Category): Observable<any> {
    return this.http.post(`${API_URL}/categories`,Category);
  }
}
