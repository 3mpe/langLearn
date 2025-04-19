import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  courses: Array<any> = [];
  errorMessage: string | null = null;

  constructor(private router: Router, private coursesService: CoursesService) {}

  ngOnInit() {
    this.coursesService.getCourses().subscribe((resp: any) => {
      this.courses = resp;
    });
  }

  viewCourse(courseId: number) {
    this.router.navigate(['/courses/detail', courseId]);
  }
}
