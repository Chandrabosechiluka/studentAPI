import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../services/student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css'],
})
export class DeleteStudentComponent implements OnInit {
  studentId: number = 0;  
  studentName: string = '';
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.studentId = +this.route.snapshot.paramMap.get('id')!;  
    this.getStudentDetails();
  }

  getStudentDetails(): void {
    this.studentsService.getStudentById(this.studentId).subscribe(
      (data) => {
        this.studentName = data.name;
      },
      (error) => {
        this.errorMessage = 'Student not found';
      }
    );
  }

  deleteStudent(): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentsService.deleteStudent(this.studentId.toString()).subscribe(() => {
        this.router.navigate(['/students']);
      });
    }
  }
}
