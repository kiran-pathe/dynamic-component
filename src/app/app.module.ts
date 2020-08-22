import { LibraryModule } from './library/library.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestContainerComponent, ChildDirective } from './test-container/test-container.component';
import { TextboxComponent } from './library/textbox/textbox.component';

@NgModule({
  declarations: [
    AppComponent,
    TestContainerComponent,
    ChildDirective
  ],
  imports: [
    BrowserModule,
    LibraryModule
  ],
  providers: [],
  entryComponents: [TextboxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
