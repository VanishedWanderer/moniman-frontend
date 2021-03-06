import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EntryComponent } from './pages/entry/entry.component';

import { environment } from 'src/environments/environment';
import { AuthInterceptorService } from './interceptors/auth.interceptor';
import { KeycloakService } from 'keycloak-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { DebtPageComponent } from './pages/debt/debt-page.component';
import { DebtComponent } from './components/debt/debt.component';
import { ReviewComponent } from './pages/review/review.component';
import { PersonComponent } from './components/person/person.component';
import {MatMenuModule, MatToolbarModule} from '@angular/material';

const keycloakService = new KeycloakService();

@NgModule({
  declarations: [AppComponent, EntryComponent, DebtPageComponent, ReviewComponent,
    DebtComponent,
    PersonComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatMenuModule,
    MatCardModule, MatToolbarModule
  ],
  providers: [
    {
      provide: KeycloakService,
      useValue: keycloakService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef): void {
    const { keycloakConfig } = environment;

    console.log('ngDoBootstrap');
    keycloakService
      .init({
        config: keycloakConfig,
        initOptions: { onLoad: 'login-required', checkLoginIframe: true },
        enableBearerInterceptor: false,
        bearerExcludedUrls: [],
        authorizationHeaderName: 'Authorization',
        bearerPrefix: 'Bearer',
        loadUserProfileAtStartUp: true
      })
      .then(() => {
        console.log('[ngDoBootstrap] bootstrap app');

        appRef.bootstrap(AppComponent);
      })
      .catch(error =>
        console.error('[ngDoBootstrap] init Keycloak failed. Message: ', error)
      );
  }
}
