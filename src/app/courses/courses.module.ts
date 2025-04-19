import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [ListComponent, DetailComponent, ProgressComponent],
  imports: [CommonModule, CoursesRoutingModule, CommonComponentsModule],
})
export class CoursesModule {}
