import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-progress',
  standalone: false,
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
})
export class ProgressComponent {
  course: any;
  enrolledCourses: Array<any> = [];

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.coursesService.getProgress(courseId).subscribe((resp) => {
      this.enrolledCourses = resp;
      this.course = resp.find((c: any) => c.id === courseId);
    });
  }

  viewCourse(courseId: number) {
    this.router.navigate(['/courses/detail', courseId]);
  }
}
