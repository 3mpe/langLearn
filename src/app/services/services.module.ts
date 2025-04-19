import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ApiService, AuthService, CoursesService],
})
export class ServicesModule {}
