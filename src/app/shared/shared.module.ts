import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatChipsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatButtonModule,
  ],
  exports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatChipsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
