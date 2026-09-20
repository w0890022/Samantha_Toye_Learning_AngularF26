import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { collection } from './collection'

//add two new variable with types
type className = number;
type studentName = string;
type personalDetails = {
  student: studentName;
  id: string;
};
type classDetails = {
  MAD: className;
};
type studentInfo = personalDetails & classDetails;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  title = "Samantha's First Angular Project";
  student1: studentInfo = {
    student: 'Samantha Toye',
    id: '0890022',
    MAD: 307001
  };

  //created a second variable
  student2: studentInfo = {
    student: 'Alex Robertson',
    id: '0890011',
    MAD: 308003
  };
}
