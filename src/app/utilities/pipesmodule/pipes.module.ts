import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooleanPipe } from './pipes/boolean.pipe';

@NgModule({
  declarations: [BooleanPipe],
  imports: [CommonModule],
  exports: [BooleanPipe],
})
export class PipesModule {}
