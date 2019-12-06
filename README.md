# Using the ng-recaptcha npm package in an Angular project

If you're using an Angular form, paste your public key in the component in the 'recaptchaPublicKey' variable.

If you're not using an Angular form, remove the 'templateUrl' link in the component and just use the one line ```<recaptcha>```.

Once you've added your public key and loaded the page, you can see recaptcha shows up and the captcha response will log to
the console when the user accepts the recaptcha.

## Package Info

<https://www.npmjs.com/package/ng-recaptcha>