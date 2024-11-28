import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowStudentsComponent } from './show-students/show-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';

const routes: Routes = [
  { path: 'students', component: ShowStudentsComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'delete-student/:id', component: DeleteStudentComponent },
  { path: 'update-student/:id', component: UpdateStudentComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
