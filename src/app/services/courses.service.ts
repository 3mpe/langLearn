import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private apiService: ApiService) {}

  getCourses(): Observable<any> {
    return this.apiService.get('courses/list.json');
  }
  getCoursesDetail(): Observable<any> {
    return this.apiService.get('courses/detail.json');
  }
  enrollInCourse(courseId: number): Observable<any> {
    return this.apiService.get(`courses/enroll.json`);
  }
  getProgress(courseId: number): Observable<any> {
    return this.apiService.get('courses/progress.json');
  }
}
