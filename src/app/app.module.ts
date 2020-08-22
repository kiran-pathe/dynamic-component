import { DropdownComponent } from './library/dropdown/dropdown.component';
import { LibraryModule } from './library/library.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestContainerComponent, HostDirective } from './test-container/test-container.component';
import { TextboxComponent } from './library/textbox/textbox.component';
import { OtherfieldComponent } from './library/otherfield/otherfield.component';

@NgModule({
  declarations: [
    AppComponent,
    TestContainerComponent,
    HostDirective
  ],
  imports: [
    BrowserModule,
    LibraryModule
  ],
  providers: [],
  entryComponents: [TextboxComponent,DropdownComponent,OtherfieldComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
