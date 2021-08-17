import { NgModule } from '@angular/core';
import { NgxMathJaxComponent } from './ngx-math-jax.component';
import { MathJaxDirective } from './ngx-math-jax.directive';
import { NgxMathJaxService } from './ngx-math-jax.service';

@NgModule({
  declarations: [NgxMathJaxComponent, MathJaxDirective],
  imports: [],
  providers: [NgxMathJaxService],
  exports: [NgxMathJaxComponent, MathJaxDirective],
})
export class NgxMathJaxModule {}
