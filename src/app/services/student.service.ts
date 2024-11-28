import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private apiUrl = 'https://gsmktg.azurewebsites.net/api/v1/techlabs/test/students';

  constructor(private http: HttpClient) {}

  // GET: Fetch all students
  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // POST: Add a new student
  addStudent(student: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, student, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  // PUT: Update an existing student
  updateStudent(id: string, student: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, student, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  // DELETE: Remove a student
  deleteStudent(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

