import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {fXInterceptor} from "./shared/interceptor/fx.interceptor";

  export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom([BrowserAnimationsModule])
    ,        importProvidersFrom(HttpClientModule),
    provideHttpClient(withInterceptors([fXInterceptor])),
  ]
};
