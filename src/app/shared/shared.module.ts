import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild([])
  ],
  exports: [HeaderComponent, MatCardModule]
})
export class SharedModule { }
