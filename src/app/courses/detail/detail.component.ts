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
    const courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.coursesService.getCoursesDetail().subscribe((resp: any) => {
      this.courses = resp;
      this.course = resp.find((c: any) => c.id === courseId);
    });
  }

  enroll() {
    this.coursesService
      .enrollInCourse(this.course.id)
      .subscribe((response: any) => {
        alert(`You have successfully enrolled in ${this.course.title}!`);
        this.router.navigate(['/courses']);
      });
  }
}
