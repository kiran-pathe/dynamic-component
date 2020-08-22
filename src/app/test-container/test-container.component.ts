import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, TemplateRef, Directive, AfterViewInit } from '@angular/core';
import { TextboxComponent } from '../library/textbox/textbox.component';

@Directive({selector: 'child-directive'})
export class ChildDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'test-container',
  templateUrl: './test-container.component.html',
  styleUrls: ['./test-container.component.css']
})
export class TestContainerComponent implements AfterViewInit {

  @ViewChild(ChildDirective, {static : true}) container:ChildDirective;
  constructor(private cFactory:ComponentFactoryResolver) { }

  ngAfterViewInit() {
    const textBoxFactory = this.cFactory.resolveComponentFactory(TextboxComponent);
    this.container.viewContainerRef.createComponent(textBoxFactory);
  }

}
