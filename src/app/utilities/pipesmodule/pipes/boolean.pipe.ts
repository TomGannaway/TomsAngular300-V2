import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanFormat',
})
export class BooleanPipe implements PipeTransform {
  transform(
    value: boolean,
    trueResult: string = 'True',
    falseResult: string = 'False',
  ) {
    return value ? trueResult : falseResult;
  }
}
