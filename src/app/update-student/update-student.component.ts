import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentsService } from '../services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent implements OnInit {
  updateStudentForm!: FormGroup;
  studentId!: string;

  constructor(
    private fb: FormBuilder,
    private studentsService: StudentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id')!;
    this.studentsService.getStudents().subscribe((students) => {
      const student = students.find((s) => s.id === this.studentId);
      if (student) {
        this.updateStudentForm = this.fb.group({
          rollNo: [student.rollNo],
          name: [student.name],
          age: [student.age],
          email: [student.email],
          date: [student.date],
          isMale: [student.isMale],
        });
      }
    });
  }

  updateStudent(): void {
    if (this.updateStudentForm.valid) {
      this.studentsService
        .updateStudent(this.studentId, this.updateStudentForm.value)
        .subscribe(() => {
          this.router.navigate(['/students']);
        });
    }
  }
}
