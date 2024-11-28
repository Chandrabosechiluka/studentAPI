import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  newStudentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentsService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newStudentForm = this.fb.group({
      rollNo: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      isMale: [false],
    });
  }

  addNewStudent(): void {
    if (this.newStudentForm.valid) {
      this.studentsService
        .addStudent(this.newStudentForm.value)
        .subscribe(() => {
          this.router.navigate(['/students']);
        });
    }
  }
}
