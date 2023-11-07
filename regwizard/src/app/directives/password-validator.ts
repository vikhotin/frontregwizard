import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export function passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        var regexOne = /\d/;
        var regexTwo = /[A-Za-z]/
        var result = regexOne.test(control.value) && regexTwo.test(control.value);
        return result ? null : {forbiddenPassword: {value: control.value}};
    };
  }

@Directive({
    selector: '[passwordCheck]',
    providers: [{provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true}]
  })

export class PasswordValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
      return passwordValidator()(control);
    }
}