import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  courses = [
    {
      id: 1,
      title: 'Beginner Spanish',
      description: 'Learn the basics of Spanish language and culture.',
      instructor: 'John Doe',
    },
    {
      id: 2,
      title: 'Intermediate French',
      description: 'Enhance your French speaking and writing skills.',
      instructor: 'Jane Smith',
    },
    {
      id: 3,
      title: 'Advanced German',
      description: 'Master the German language with advanced lessons.',
      instructor: 'Alice Johnson',
    },
  ];

  constructor(private router: Router) {}

  viewCourse(courseId: number) {
    this.router.navigate(['/courses/detail', courseId]);
  }
}
