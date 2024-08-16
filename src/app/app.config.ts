import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { tokenInterceptor } from './interceptors/token.interceptor';
import { CorbanService } from './services/corban.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideToastr(),
    provideHttpClient(
      withInterceptors([tokenInterceptor]),
    ),
    CorbanService, provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()
  ]
};
