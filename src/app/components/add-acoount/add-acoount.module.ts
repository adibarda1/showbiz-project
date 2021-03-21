import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAcoountComponent } from './add-acoount.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddAcoountComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AddAcoountComponent]
})
export class AddAcoountModule { }
