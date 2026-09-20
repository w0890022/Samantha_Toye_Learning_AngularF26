import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { collection } from './collection';

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
//create array with 6 instances of my collection
  collection: collection[] = [
    {
      id: 1,
      name: 'Babe Ruth & Lou Gerhig Card',
      category: 'Trading Card',
      value: 7000.00,
      condition: 'Mint'
    },
    {
      id: 2,
      name: 'Star Wars Figure',
      category: 'Figure',
      value: 125.00,
      condition: 'Near Mint'
    },
    {
      id: 3,
      name: 'Detroit Tigers Signed Ball',
      category: 'Collectible',
      value: 175.00,
      condition: 'Near Mint'
    },
    {
      id: 4,
      name: 'Charizard Model Display',
      category: 'Figure',
      value: 100.00
    },
    {
      id: 5,
      name: 'Comic Book Superman Issue 15',
      category: 'Collectible',
      value: 45.00,
      condition: 'Near Mint'
    }
  ];
}
