import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  /**
   * Can just use this if you're not doing a form. 
   * `<re-captcha (resolved)="resolved($event)" siteKey="YOUR_KEY"></re-captcha>`
   */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public submitted = false;
  public loggedIn = false;
  public recaptchaPublicKey = "YOUR PUBLIC KEY HERE";

  @ViewChild('heroForm', null) public heroForm: NgForm;
  
  public resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  public hero = {
    name: "",
    alterEgo: "",
    recaptcha: ""
  }

  onSubmit(form) {
    console.log(form.value);
    this.submitted = true;
  }
}