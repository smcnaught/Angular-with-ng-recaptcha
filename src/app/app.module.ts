import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule  } from 'ng-recaptcha';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
