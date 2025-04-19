import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-progress',
  standalone: false,
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
})
export class ProgressComponent {
  course: any;
  enrolledCourses = [
    {
      id: 1,
      title: 'Beginner Spanish',
      progress: 75,
      completedLessons: 15,
      totalLessons: 20,
      completedQuizzes: 3,
      totalQuizzes: 4,
    },
    {
      id: 2,
      title: 'Intermediate French',
      progress: 50,
      completedLessons: 10,
      totalLessons: 20,
      completedQuizzes: 2,
      totalQuizzes: 4,
    },
    {
      id: 3,
      title: 'Advanced German',
      progress: 30,
      completedLessons: 6,
      totalLessons: 20,
      completedQuizzes: 1,
      totalQuizzes: 4,
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    const courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.enrolledCourses.find((c) => c.id === courseId);
  }

  viewCourse(courseId: number) {
    this.router.navigate(['/courses/detail', courseId]);
  }
}
