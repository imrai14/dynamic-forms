import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
export class KeyValidators {
    getValidator(key: string): ValidatorFn {
        return this.validatatorsObj[key];
    }
    public validatatorsObj = {
        firstName: Validators.compose([
            Validators.required, Validators.pattern(/^[a-zA-Z '.-]+$/),
            Validators.minLength(2), Validators.maxLength(5)
        ]),

        emailAddress: Validators.compose([
            Validators.required, Validators.pattern(/^[a-zA-Z '.-]+$/),
            Validators.minLength(2), Validators.maxLength(25)
        ])
    }
}