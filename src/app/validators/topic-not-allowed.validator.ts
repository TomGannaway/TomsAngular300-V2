import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function disallowedTopicValidator(topic: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value.toString().toLocaleLowerCase() === topic) {
      return {
        disallowedTopic: true,
      };
    } else {
      return null;
    }
  };
}
