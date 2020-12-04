import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl: string;

  constructor(protected http: HttpClient) {
    this.apiUrl = "http://localhost:8080/task";
  }

  saveUpdate(entity: any) {
    console.log(entity);
    if (entity.id != null && entity.id != '') {
        return this.http.put(`${this.apiUrl}`, entity);
    } else {
        entity.id = null;
        return this.http.post(`${this.apiUrl}`, entity);
    }
  }

  findById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  findAll(page: any) {
    return this.http.get(`${this.apiUrl}?` +
        'size=' + page.size +
        '&page=' + page.number +
        (page.order ? '&sort=' + page.order : ''));
  }
}
