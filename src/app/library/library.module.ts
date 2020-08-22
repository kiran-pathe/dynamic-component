
import { DropdownComponent } from './dropdown/dropdown.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './textbox/textbox.component';
import { OtherfieldComponent } from './otherfield/otherfield.component';



@NgModule({
  declarations: [TextboxComponent,DropdownComponent,
    OtherfieldComponent],
  imports: [
    CommonModule
  ],
  exports: [TextboxComponent,DropdownComponent,OtherfieldComponent]
})
export class LibraryModule { }
