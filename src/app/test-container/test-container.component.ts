import { CommonHelper } from './../helper/CommonHelper';
import { DropdownComponent } from './../library/dropdown/dropdown.component';
import { Component, ComponentFactoryResolver, ViewContainerRef, Directive, Input, OnInit } from '@angular/core';
import { TextboxComponent } from '../library/textbox/textbox.component';
import { OtherfieldComponent } from '../library/otherfield/otherfield.component';

@Directive({
  selector: '[host]'
})
export class HostDirective extends CommonHelper implements OnInit {
  @Input() field;
  constructor(private viewRef: ViewContainerRef,private cFactory:ComponentFactoryResolver){
    super();
  }

  ngOnInit(){
    const factory = this.cFactory.resolveComponentFactory(this.getComponent());
    this.createComponent(factory,this.viewRef);
  }

  getComponent() {
    if(this.field.type == 1){
      return TextboxComponent;
    }else if(this.field.type == 2){
      return DropdownComponent;
    } else {
      return OtherfieldComponent;
    }
  }
}

@Component({
  selector: 'test-container',
  templateUrl: './test-container.component.html',
  styleUrls: ['./test-container.component.css']
})
export class TestContainerComponent {
  items = [
    {
      type: 1
    },
    {
      type: 2
    },
    {
      type: 3
    }
 ]
}
