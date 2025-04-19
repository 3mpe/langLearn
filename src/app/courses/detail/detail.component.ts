import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  course: any;

  courses = [
    {
      id: 1,
      title: 'Beginner Spanish',
      description: 'Learn the basics of Spanish language and culture.',
      instructor: 'John Doe',
      content: ['Introduction to Spanish', 'Basic Grammar', 'Common Phrases'],
      duration: '3 hours',
      difficulty: 'Beginner',
    },
    {
      id: 2,
      title: 'Intermediate French',
      description: 'Enhance your French speaking and writing skills.',
      instructor: 'Jane Smith',
      content: ['Intermediate Grammar', 'Writing Skills', 'Speaking Practice'],
      duration: '4 hours',
      difficulty: 'Intermediate',
    },
    {
      id: 3,
      title: 'Advanced German',
      description: 'Master the German language with advanced lessons.',
      instructor: 'Alice Johnson',
      content: ['Advanced Grammar', 'Literature', 'Fluency Practice'],
      duration: '5 hours',
      difficulty: 'Advanced',
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.courses.find((c) => c.id === courseId);
  }

  enroll() {
    alert(`You have successfully enrolled in ${this.course.title}!`);
    this.router.navigate(['/courses']);
  }
}
