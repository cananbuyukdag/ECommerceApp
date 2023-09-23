import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';

import { routes } from './app/router';
import { AppComponent } from './app/app.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      BrowserAnimationsModule,
      NgxSpinnerModule,
      HttpClientModule,
      ToastrModule.forRoot({
        closeButton: true,
        progressBar: true,
      }),
      RouterModule.forRoot(routes)
    ),
  ],
});
