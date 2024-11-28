// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AddStudentComponent } from './add-student/add-student.component';
// import { ShowStudentsComponent } from './show-students/show-students.component';
// import { UpdateStudentComponent } from './update-student/update-student.component';
// import { DeleteStudentComponent } from './delete-student/delete-student.component';


// const routes: Routes = [
//   { path: 'students', component: ShowStudentsComponent },
//   { path: 'add-student', component: AddStudentComponent },
//   { path: 'update-student/:id', component: UpdateStudentComponent },
//   { path: 'delete-student/:id', component: DeleteStudentComponent },
//   { path: '', redirectTo: '/students', pathMatch: 'full' },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'student-app';
}


