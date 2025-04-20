import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  course: any;
  courses: Array<any> = [];

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    this.coursesService.getCoursesDetail(courseId).subscribe((resp: any) => {
      this.course = resp;
      const userId = localStorage.getItem('userId') || null;
      
      this.coursesService
        .isEnrolled(this.course.id, userId)
        .subscribe((response: any) => {
          this.course.isEnrolled = response.isEnrolled;
        });

    });
  }

  enroll() {
    const userId = localStorage.getItem('userId') || null;

    this.coursesService
      .enrollInCourse(this.course.id, userId)
      .subscribe((response: any) => {
        alert(response.message);
        this.router.navigate(['/courses']);
      });
  }
}
