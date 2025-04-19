import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module';
import { provideHttpClient } from '@angular/common/http';
import { CoursesModule } from './courses/courses.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
  ],
  // @ts-ignore
  imports: [AuthModule, CoursesModule, ServicesModule],
};
