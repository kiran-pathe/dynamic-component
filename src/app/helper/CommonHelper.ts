
import { ViewContainerRef,  ComponentFactory } from '@angular/core';

export class CommonHelper {
    createComponent(factory:ComponentFactory<any> ,container:ViewContainerRef){
        container.createComponent(factory);
    }
}