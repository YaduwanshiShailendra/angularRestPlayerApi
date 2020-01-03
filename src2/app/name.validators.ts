import { AbstractControl, ValidationErrors } from "@angular/forms";

// first step

export class CustomValidators {
  static removespace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0) {
      return { removespace: true };
    } else {
      return null;
    }
  }
}
