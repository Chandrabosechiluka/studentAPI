import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css'],
})
export class ShowStudentsComponent implements OnInit {
  students: any[] = [];
  errorMessage: string = '';

  constructor(
    private studentsService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentsService.getStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        this.errorMessage = 'Failed to fetch students';
      }
    );
  }

  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentsService.deleteStudent(id.toString()).subscribe(() => {
        this.getStudents(); // Refresh the list after deletion
      });
    }
  }
}

