import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-first-project';
}

function combine<A, B>(project: A, studentId: B){
  return { ...project, ...studentId };
}
//add two new variable with types
let project = "My first Project";
let studentId = 0890022;
//define the variable
const projectDetails = combine(project, studentId);
console.log(projectDetails);
