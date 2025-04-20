import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private apiService: ApiService) {}

  getCourses(): Observable<any> {
    return this.apiService.get('courses/');
  }
  getCoursesDetail(courseId: any): Observable<any> {
    return this.apiService.post(`courses/${courseId}`, {});
  }
  enrollInCourse(courseId: number, userId: string | null): Observable<any> {
    return this.apiService.post('courses/enroll', { courseId, userId });
  }
  isEnrolled(courseId: number, userId: string | null): Observable<any> {
    return this.apiService.post('courses/isEnrolled', { courseId, userId });
  }
  getProgress(courseId: any, userId: string | null): Observable<any> {
    return this.apiService.post(`courses/progress`, { courseId, userId });
  }
}
