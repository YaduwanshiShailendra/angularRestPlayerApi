import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
  static removeWhiteSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0) {
      return { removeWhiteSpace: true };
    } else {
      return null;
    }
  }
}
