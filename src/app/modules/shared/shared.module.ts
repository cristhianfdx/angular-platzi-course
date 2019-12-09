import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Directives
import { HighlightDirective } from './directives/higlight/highlight.directive';

// Pipes
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    ExponentialPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    ExponentialPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

